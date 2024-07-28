import { getLesson, getuserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LessonPage  = async () =>{
    const lessonData = getLesson();
    const userProgressData = getuserProgress();
    
    const [
        lesson,
        userProgress,
    ] = await Promise.all([
        lessonData,
        userProgressData
    ])

    if(!lesson || !userProgress){
        redirect('/learn')
    }
    
    const initialPrcentage = lesson.challenges
        .filter((challenge) => challenge.completed)
        .length / lesson.challenges.length *100

    return(
        <Quiz 
        
        />
    );
};

export default LessonPage;