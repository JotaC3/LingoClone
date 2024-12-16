import { cache } from "react";
//import db from "./drizzle";

import db from "@/db/drizzle";
import { auth } from "@clerk/nextjs/server";
import { asc, desc, eq } from "drizzle-orm";
import { 
    courses, 
    lessons, 
    units, 
    userProgress,
    questionProgress,
} from "./schema";

export const getuserProgress = cache(async() =>{
    const  {userId} = await auth();

    if(!userId){
        return null;
    }
    const data = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        },
    });

    return data
});


export const getUnits = cache(async () =>{
    const {userId} = await auth();
    const userProgress = await getuserProgress();

    if(!userId || !userProgress?.activeCourseId){
        return [];
    }

    const data = await db.query.units.findMany({
        orderBy: (units, {asc}) => [asc(units.order)],
        where: eq(units.courseId, userProgress.activeCourseId),
        with: {
            lessons: {
                orderBy: (lessons, {asc}) => [asc(lessons.order)],
                with: {
                    questions: {
                        orderBy: (questions, {asc}) => [asc(questions.order)],
                        with: {
                            questionProgress: {
                                where: eq(
                                    questionProgress.userId,
                                    userId,
                                ),
                            },
                        },
                    },
                },
            },
        },
    });

    const normalizedData = data.map((unit) => {
        const lessonsWitthCompletedStatus =unit.lessons.map((lesson) =>{
            if(lesson.questions.length === 0){
                return{...lesson, completed: false}
            }

            const allCompletedquestions = lesson.questions.every((question) =>{
                return question.questionProgress
                && question.questionProgress.length > 0
                &&question.questionProgress.every((progress) => progress.completed); 
            });

            return {...lesson, completed: allCompletedquestions} 
        });
        return{...unit, lessons: lessonsWitthCompletedStatus}
    });

    return normalizedData;
});


export const getCourses = cache(async () =>{
    const data = await db.query.courses.findMany();

    return data;
});

export const getCourseById = cache(async (courseId: number) =>{
    const data = await db.query.courses.findFirst({
        where: eq(courses.id, courseId),
        //TODO populate units and lessons
    });

    return  data;
});

export const  getCourseProgress = cache(async () =>{
    const {userId} = await auth();
    const userProgress = await getuserProgress();

    if(!userId || !userProgress?.activeCourseId){
        return null;
    }

    const unitsInActiveCourse =await db.query.units.findMany({
        orderBy: (units, {asc}) =>[asc(units.order)],
        where: eq(units.courseId, userProgress.activeCourseId),
        with: {
            lessons: {
                orderBy: (lessons, { asc }) => [asc(lessons.order)],
                with: {
                    unit: true,
                    questions: {
                        with:{
                            questionProgress: {
                                where: eq(questionProgress.userId, userId),
                            }
                        }
                    }
                }
            }
        }
    });

    const firstUncompletedLesson = unitsInActiveCourse
        .flatMap((unit) => unit.lessons)
        .find( (lesson) =>{
            return lesson.questions.some((question) =>{
                return !question.questionProgress 
                || question.questionProgress.length === 0 
                || question.questionProgress.some((progress) => progress.completed === false);
            });
        });

    return{
        activeLesson: firstUncompletedLesson,
        activeLessonId: firstUncompletedLesson?.id,
    };
});


export const  getLesson = cache(async (id? : number)  =>{
    const {userId} = await auth();

    if(!userId){
        return null;
    }

    const courseProgress = await getCourseProgress();

    const lessonId = id || courseProgress?.activeLessonId;

    if(!lessonId){
        return null;
    }

    const data = await db.query.lessons.findFirst({
        where: eq(lessons.id, lessonId),
        with: {
            questions: {
                orderBy: (questions, {asc}) =>[asc(questions.order)],
                with: {
                    questionOptions: true,
                    questionProgress: {
                        where: eq(questionProgress.userId, userId)
                    }
                }
            }
        }
    });

    if(!data || !data.questions){
        return null;
    }

    const normalizedquestions = data.questions.map((question) =>{
        const completed = question.questionProgress 
            && question.questionProgress.length > 0
            && question.questionProgress.every((progress) => progress.completed) ;

        return {...question, completed};
    });

    return{...data, questions: normalizedquestions}
});


export const getLessonPercentage = cache(async () =>{
    const courseProgress = await getCourseProgress();
    if(!courseProgress?.activeLessonId){
        return 0;
    }

    const lesson = await getLesson(courseProgress.activeLessonId);

    if(!lesson){
        return 0;
    }

    const completedquestions = lesson.questions
        .filter((question) => question.completed);

    const percentage = Math.round(
        (completedquestions.length / lesson.questions.length) * 100,
    );

    return percentage;
})

export const getTopTen = cache(async() =>{
    const {userId} = await auth();

    if(!userId){
        return [];
    }

    const data = await db.query.userProgress.findMany({
        orderBy: (userProgress, {desc}) => [desc(userProgress.points)],
        limit: 10,
        columns:{
            userId: true,
            userName: true,
            userImageSrc: true,
            points: true,
        },
    });

    return data
})
