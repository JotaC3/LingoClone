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
    
    const initialPrcentage = lesson.questions
        .filter((question) => question.completed)
        .length / lesson.questions.length * 100;

    return (
        <>
            <Quiz 
                initialLessonId={lesson.id}
                initialLessonquestions={lesson.questions}
                //initialHearts={userProgress.hearts}
                initialPoints={userProgress.points}
                initialPercentage={initialPrcentage}
                //userSubscription={null}
                />
        
        </>
    );
};

export default LessonIdPage;