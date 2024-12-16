import { getLesson, getuserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "./quiz";

const LessonPage = async () => {
    const lessonData = getLesson();
    const userProgressData = getuserProgress();
    
    const [
        lesson,
        userProgress,
    ] = await Promise.all([
        lessonData,
        userProgressData
    ]);

    if (!lesson || !userProgress) {
        redirect('/learn');
    }
    
    const initialPrcentage = lesson.questions
        .filter((question) => question.completed)
        .length / lesson.questions.length * 100;

    return (
        <>
            <Quiz 
                initialLessonId={lesson.id}
                initialLessonquestions={lesson.questions}
                initialHearts={userProgress.hearts}
                initialPercentage={initialPrcentage}
                userSubscription={null}  //TODO: ADD USER SUBSCRIPTION
                />
        
        </>
    );
};

export default LessonPage;