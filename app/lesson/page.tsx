import { getLesson, getuserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "./quiz";

const LessonPage = async () => {
    const lessonData = getLesson();
    const userProgressData = getuserProgress();

    const [lesson, userProgress] = await Promise.all([
        lessonData,
        userProgressData,
    ]);

    if (!lesson || !userProgress) {
        redirect('/learn');
    }

    // Lista completa de questões do banco
    const allQuestions = lesson.questions;

    // Selecionar questões para exibir no quiz
    const processedQuestions = Object.values(
        allQuestions.reduce((acc, question) => {
            acc[question.order] = acc[question.order] || [];
            acc[question.order].push(question);
            return acc;
        }, {} as Record<number, typeof allQuestions>)
    ).map((group) => {
        const randomIndex = Math.floor(Math.random() * group.length);
        return group[randomIndex];
    });

    // Ordenar as questões processadas
    processedQuestions.sort((a, b) => a.order - b.order);

    // Calcular o progresso com base em todas as questões
    const initialPrcentage = allQuestions.filter((q) => q.completed).length / allQuestions.length * 100;

    return (
        <Quiz 
            initialLessonId={lesson.id}
            initialLessonquestions={processedQuestions} // Passar apenas as questões processadas
            //initialHearts={userProgress.hearts}
            initialPoints={userProgress.points}
            initialPercentage={initialPrcentage} // Progresso baseado em todas as questões
           // userSubscription={null} 
        />
    );
};

export default LessonPage;