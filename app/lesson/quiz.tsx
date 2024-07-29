"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { useState } from "react";
import { Header } from "./header";

type Props = {
    intialPercentage: number;
    initialHearts: number;
    initialLessonId: number;
    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[];
    })[];
    userSubscription: any; //TODO: REPLACE 
};

export const Quiz = ({
    intialPercentage,
    initialHearts,
    initialLessonId,
    initialLessonChallenges,
    userSubscription
}: Props) => {
    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(intialPercentage);
    
    return (
        <>
            <Header 
                hearts={hearts}
                percentage={percentage}
                hasActiveSubscription={!!userSubscription?.isActive}
            />
        </>
    );
};