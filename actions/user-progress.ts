"use server";

import { pointsToRefil } from "@/constants";
import db from "@/db/drizzle";
import { getCourseById, getuserProgress } from "@/db/queries";
import { questionOptions, questionProgress, questions, userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { error } from "console";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const upsertUserProgress = async (courseId: number) =>{
    const{userId} = await auth();   
    const user = await currentUser();


    if(!userId || !user){
        throw new Error("Unauthorized");
    }

    const course = await getCourseById(courseId);

    if(!course){
        throw new Error("Course Not Found");
    }


    const existingUserProgress = await getuserProgress();



    if(existingUserProgress){
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/mascot.svg",
        });

        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn");
    }

    await db.insert(userProgress).values({
        userId,
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.svg",
    });

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
};

//TODO: Mudar o nome da função reducePoints
export const reducePoints = async (questionId: number) =>{
    const {userId} = await auth();

    if(!userId){
        throw new Error("não autorizado");
    }

    const currentUserProgress = await getuserProgress();
    // TODO GET USER SUBSCRIPTION

    const question = await db.query.questions.findFirst({
        where: eq(questions.id, questionId),
    });
    if(!question){
        throw new Error("question not found");
    }
    const lessonId = question.lessonId; 

    const existingquestionProgress = await db.query.questionProgress.findFirst({
        where: and(
            eq(questionProgress.userId, userId),
            eq(questionProgress.questionId, questionId),
        )
    });

    const isPratice = !!existingquestionProgress;

    if(isPratice){
        return {error: "practice"}
    }

    if(!currentUserProgress){
        throw new Error("UserProgress not found");
    }

    /* if(currentUserProgress.hearts === 0){
        return {error: "hearts"};
    } */

    if (currentUserProgress.points < 5){
        return {error: "points"};
        
    }
    await db.update(userProgress).set({
        //hearts: Math.max(currentUserProgress.hearts -1, 0),
        points: Math.max(currentUserProgress.points -5, 0),
    }).where(eq(userProgress.userId, userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
};


/* export const refillHearts = async () =>{
    const currentUserProgress = await getuserProgress();
    if(!currentUserProgress){
        throw new Error("User progress not found"); 
    }

    if(currentUserProgress.hearts === 5){
        throw new Error("Hearts are already full");
    }

    if(currentUserProgress.points<pointsToRefil){
        throw new Error('Sem pontos o suficiete');
    }

    await db.update(userProgress).set({
        hearts: 5,
        points: currentUserProgress.points -pointsToRefil,
    }).where(eq(userProgress.userId, currentUserProgress.userId));

    revalidatePath('/shop');
    revalidatePath('/learn');
    revalidatePath('/quests');
    revalidatePath('/leaderboard');
} */