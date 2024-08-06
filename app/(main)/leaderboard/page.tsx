import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getTopTen, getuserProgress } from "@/db/queries";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import { index } from "drizzle-orm/mysql-core";
import Image from "next/image";
import { redirect } from "next/navigation";

const LeaderBoardPage = async () =>{
    const UserProgressData = getuserProgress();
    const leaderboardData = getTopTen();
    const [
        userProgress,
        leaderBoard,
    ] = await Promise.all([
        UserProgressData,
        leaderboardData,
    ])

    if(!userProgress || !userProgress.activeCourse){
        redirect('/courses');
    }
    

    return(
        <div className="flex  flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCourse = {userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points= {userProgress.points}
                    hasActiveSubscriprion= {false}
                />
                <Promo />
                <Quests points={userProgress.points}/>
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center ">
                    <Image 
                        src='/leaderboard.svg'
                        alt="Leaderboard"
                        height={90}
                        width={90} 
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6 ">
                        LeaderBoard
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Veja o quão avançado você é, comparado a outros estudantes
                    </p>
                    <Separator className="mb-4 h-0.5 rounded-full "/>
                    {leaderBoard.map((userProgress, index) => (
                        <div 
                            key={userProgress.userId}
                            className="flex items-center w-full p-2 px-4 rounded-full hover:bg-gray-200/50"
                        >
                            <p className="font-bold text-lime-700 mr-4">{index + 1}</p>
                            <Avatar
                                className="border bg-green-500 rounded-full h-12 w-12 ml-3 mr-6"
                            >
                                <AvatarImage 
                                    className="object-cover rounded-full"
                                    src={userProgress.userImageSrc}
                                />
                            </Avatar>
                            <p className="font-bold text-neutral-800 flex-1">
                                {userProgress.userName}
                            </p>
                            <p className="text-muted-foreground">
                                {userProgress.points} XP
                            </p>
                        </div>
                    ))}
                </div>
            </FeedWrapper>
        </div>
    );
};

export default LeaderBoardPage;