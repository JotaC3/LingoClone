import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { title } from "process";
import { getCourseProgress, getLessonPercentage, getUnits, getuserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
//title: userProgress.activeCourse.title, imageSrc: userProgress.activeCourse.ImageSrc
const LearnPage = async () => {
    const userProgressData = await getuserProgress();
    const courseProgressData = await getCourseProgress();
    const lessonPercentageData = await getLessonPercentage();
    const unitsData = getUnits();


    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage
    ] = await Promise.all([
        userProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData,
    ])

    // verifica se temos os dados
    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }
    if (!courseProgress) {
        redirect('/courses');
    }

    return (
        <div className="flex flex-row-reverse gap-[48px]  px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    //hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscriprion={false}
                />
                <Quests points={userProgress.points}/>
            </StickyWrapper>
            <div className="flex-1">
                <FeedWrapper>
                    <Header title= {userProgress.activeCourse.title} /> {/*Alterar: Título da página cor cinza */}
                    {units.map((unit) => (
                        <div key={unit.id} className="mb-10">
                            <Unit
                                id={unit.id}
                                order={unit.order}
                                description={unit.Description} /* Alterar: Descrição da unidade, componente verde (unit Banner)*/
                                title= {unit.title} /*Alterar: Título da unidade, componente verde */
                                lessons={unit.lessons}
                                activeLesson={courseProgress.activeLesson}
                                activeLessonPercentage={lessonPercentage}
                            />
                        </div>
                    ))}
                </FeedWrapper>
            </div>
        </div>
    );
};

export default LearnPage;
