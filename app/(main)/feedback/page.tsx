import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/components/user-progress";
import { quests } from "@/constants";
import { getuserProgress } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";



const FeedbackPage = async () => {
    const UserProgressData = getuserProgress();
    const [
        userProgress,
    ] = await Promise.all([
        UserProgressData,
    ])

    if (!userProgress || !userProgress.activeCourse) {
        redirect('/courses');
    }


    return (
        <div className="flex  flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    //hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscriprion={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center ">
                    <Image
                        src='/feedback.svg'
                        alt="Feedback"
                        height={90}
                        width={90}
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6 ">
                        Feedback
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Por favor, preencha o formulário abaixo, é muito importante para nós.
                    </p>


                    <div className="w-full flex items-center justify-center p-4 gap-x-4 border-t-2">
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf6pDenEhnFnrXrvXvv7h89H-6DvPps6muMteGXQoHkgsT3Zw/viewform">
                            <div className="pt-8 pb-7 flex flex-col items-center justify-center text-center gap-y-3">
                                <Image src="/form.svg" height={50} width={50} alt="logo" />
                                <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide">
                                    Clique aqui
                                </h1>
                            </div>
                        </Link>
                    </div>
                    {/* <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf6pDenEhnFnrXrvXvv7h89H-6DvPps6muMteGXQoHkgsT3Zw/viewform" >
                            <div className="pt-8 pl-4 pb-7 flex flex-col items-center gap-x-3 gap-y-3">
                                <Image src="/form.svg" height={50} width={50} alt="logo" />
                                <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide">
                                    Clique aqui
                                </h1>
                            </div>
                        </Link>
                   </div> */}

                    {/* <ul className="w-full">
                        {quests.map((quest) => {    
                            const progress = (userProgress.points/quest.value) * 100;

                            return(
                                <div className="flex items-center w-full p-4 gap-x-4 border-t-2" key={quest.title}>
                                     <Image src='/points.svg' alt="Points" width={60} height={60}/>
                                     <div className="flex flex-col gap-y-2 w-full">
                                        <p className="text-neutral-700 text-xl font-bold">
                                            {quest.title}
                                        </p>
                                        <Progress value={progress}  className="h-3"/>
                                     </div>
                                </div>
                            )
                        })}
                    </ul> */}
                </div>
            </FeedWrapper>
        </div>
    );
};

export default FeedbackPage;