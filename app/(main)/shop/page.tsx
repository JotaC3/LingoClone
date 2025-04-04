/* import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getuserProgress } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Items } from "./itens";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

const ShopPage = async () => {
    const UserProgressData = getuserProgress();

    const [
        userProgress
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
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscriprion={false}
                />
                <Quests points={userProgress.points}/>
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image
                        src='/shop.svg'
                        alt="Shop"
                        height={90}
                        width={90}
                    />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6 ">
                        Compras
                    </h1>
                    <p className="text-muted-foreground text-center text-lg mb-6">
                        Gaste seus pontos aqui
                    </p>
                    <Items
                        hearts={userProgress.hearts}
                        points={userProgress.points}
                        hasActiveSubscription={false}
                    />
                </div>
            </FeedWrapper>
        </div>
    );
};

export default ShopPage; */