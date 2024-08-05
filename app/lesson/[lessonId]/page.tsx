import { getLesson, getuserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "../quiz";

type Props = {
    params:{
        lessonId: number;
    }
}

const LessonIdPage = async ({params}: Props) => {
    const lessonData = getLesson(params.lessonId);
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
    
    const initialPrcentage = lesson.challenges
        .filter((challenge) => challenge.completed)
        .length / lesson.challenges.length * 100;

    return (
        <>
            <Quiz 
                initialLessonId={lesson.id}
                initialLessonChallenges={lesson.challenges}
                initialHearts={userProgress.hearts}
                initialPercentage={initialPrcentage}
                userSubscription={null} //TODO: ADD USER SUBSCRIPTION
                />
        
        </>
    );
};

export default LessonIdPage;