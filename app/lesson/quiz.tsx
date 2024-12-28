"use client";

import { questionOptions, questions } from "@/db/schema";
import { useState, useTransition } from "react";
import { Header } from "./header";
import { QuestionBubble } from "./question-bubble";
import { Question } from "./challenge";// TODO mudar para question
import { Footer } from "./footer";
import { upsertquestionProgress } from "@/actions/challenge-progress";// TODO mudar para question
import { toast } from "sonner";
import { reduceHearts } from "@/actions/user-progress";
import { useAudio, useWindowSize, useMount } from "react-use";
import Image from "next/image";
import { Result } from "postcss";
import { ResultCard } from "./result-card";
import { useRouter } from "next/navigation";
import Confetti from 'react-confetti'
import { useHeartsModal } from "@/store/use-hearts-modal";
import { usePracticeModal } from "@/store/use-practice-modal";

type Props = {
    initialPercentage: number;
    initialHearts: number;
    initialLessonId: number;
    initialLessonquestions: (typeof questions.$inferSelect & {
        completed: boolean;
        questionOptions: typeof questionOptions.$inferSelect[];
    })[];
    userSubscription: any; //TODO: REPLACE 
};

export const Quiz = ({
    initialPercentage,
    initialHearts,
    initialLessonId,
    initialLessonquestions,
    userSubscription
}: Props) => {

    const { open: openHeartsModal } = useHeartsModal();
    const { open: openPracticeModal } = usePracticeModal();

    useMount(()=>{
        if(initialPercentage === 100){
            openPracticeModal();
        }
    })

    //negócio do confetti
    const{ width, height } = useWindowSize();

    //router
    const router = useRouter()

    //audio
    const [
        correctAudio,
        _c,
        correctControls,
    ] = useAudio({src: '/correct.mp3'});

    const [
        incorrectAudio,
        _i,
        incorrectControls,
    ] = useAudio({src: '/incorrect.mp3'});
    const [finishAudio] = useAudio({ src: '/finish.mp3', autoPlay: true })

    const [lessonId] = useState(initialLessonId)
    const [pending, startTransition] = useTransition();
    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(() =>{
        return initialPercentage === 100 ? 0 : initialPercentage; 
    });
    const[questions] = useState(initialLessonquestions); 
    const [activeIndex, setActiveIndex] = useState(() =>{
        const uncompletedIndex = questions.findIndex((challange) => !challange.completed);

        return uncompletedIndex === -1 ? 0 : uncompletedIndex;
    });

    const [selectedOption, setSelectedOption] = useState<number>();
    const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");

    const  question = questions[activeIndex];
    const options = question?.questionOptions ?? []

    const onNext  = () =>{
        setActiveIndex((current) => current + 1)
    }

    const onSelect = (id: number) =>{
        if(status !== "none") return;

        setSelectedOption(id);
    }

    const onContinue= () =>{
        if(!selectedOption) return;

        if(status ==="wrong"){
            setStatus("none");
            setSelectedOption(undefined);
            return
        }
        if(status ==="correct"){
            onNext();
            setStatus("none");
            setSelectedOption(undefined);
            return
        }

        const correctOption = options.find((option) =>option.correct);
        if(!correctOption){
            return
        }

        if(correctOption.id === selectedOption){
            startTransition(() =>{

                upsertquestionProgress(question.id)
                 .then((response) =>{
                    if(response?.error === "hearts"){
                        openHeartsModal();
                        return
                    }

                    correctControls.play();
                    setStatus("correct");
                    setPercentage((prev) => prev + 100 /questions.length);

                    //caso onde o usuário está praticando/fazendo dnv
                    if(initialPercentage === 100){
                        setHearts((prev) =>Math.min(prev + 1, 5))
                    }
                 }).catch(() => toast.error("Algo deu errado, por favor tente"))

            });
        } else{
            startTransition(() => {
                reduceHearts(question.id)
                    .then((response) =>{
                        if(response?.error === 'hearts'){
                            openHeartsModal();
                            return
                        }

                        incorrectControls.play();+
                        setStatus("wrong");
              
                        if(!response?.error){
                            setHearts((prev) => Math.max(prev -1, 0));
                        }
                    }).catch(() => toast.error("Something went wrong."))
            })
            
        }
    };

    if(!question){
        return(
            <>
                {finishAudio}
                <Confetti 
                    width={width}
                    height={height}
                    recycle={false}
                    numberOfPieces={500}
                    tweenDuration={10000}
                />
                <div className="flex flex-col gap-y-4 lg:gap-Y-8 max-w-lg mx-auto text-center items-center justify-center h-full">
                     <Image 
                        src="/finish.svg" 
                        alt="Finis" className="hidden lg:block"
                        height={100}
                        width={100}
                     />
                     <Image 
                        src="/finish.svg" 
                        alt="Finis" className="block lg:hidden"
                        height={50}
                        width={50}
                     />
                     <h1 className="text-xl lg:text-3xl font-bold text-neutral-700">
                        Parabéns! <br /> Você completou a lição
                     </h1>
                     <div className="flex items-center gap-x-4 w-full">
                        <ResultCard 
                            variant='points'
                            value={questions.length * 10}
                        />
                        <ResultCard 
                            variant='hearts'
                            value={hearts}
                        />
                     </div>
                     
                </div>
                <Footer 
                    lessonId={lessonId}
                    status = 'completed'
                    onCheck={() => router.push('/learn')}
                /> 
            </>
        );
    }

    const title = question.type === 'ASSIST' 
    ? 'Selecione a alternativa correta'
    : question.question; 
    
    return (
        <>
            {incorrectAudio}
            {correctAudio}
            <Header 
                hearts={hearts}
                percentage={percentage}
                hasActiveSubscription={!!userSubscription?.isActive}
            />
            <div className="flex-1">
                <div className="h-full flex items-center justify-center">
                    <div className="lg:min-h-[350px] lg:w-[60%] w-full px-6 lg:px-0 flex flex-col gap-y-12">
                        <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
                            {title}
                        </h1>
                        <div>
                            {question.type === 'ASSIST' &&(
                                <QuestionBubble question ={question.question}/>
                            )}

                            <Question 
                                options = {options}
                                onSelect= {onSelect}
                                status = {status}
                                selectedOption = {selectedOption}
                                disabled ={pending}
                                type = {question.type}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer 
                disabled={pending || !selectedOption}
                status={status}
                onCheck={onContinue}
            />
        </>
    );
};