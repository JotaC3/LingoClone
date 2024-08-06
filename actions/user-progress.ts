"use server";

import { pointsToRefil } from "@/constants";
import db from "@/db/drizzle";
import { getCourseById, getuserProgress } from "@/db/queries";
import { challengeOptions, challengeProgress, challenges, userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { error } from "console";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const upsertUserProgress = async (courseId: number) =>{
    const{userId} = await auth();   
    const user = await currentUser();


    if(!userId || !user){
        throw new Error("Unauthorized");
    }

    const course = await getCourseById(courseId);

    if(!course){
        throw new Error("Course Not Found");
    }


    const existingUserProgress = await getuserProgress();



    if(existingUserProgress){
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/mascot.svg",
        });

        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn");
    }

    await db.insert(userProgress).values({
        userId,
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.svg",
    });

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
};

export const reduceHearts = async (challengeId: number) =>{
    const {userId} = await auth();

    if(!userId){
        throw new Error("não autorizado");
    }

    const currentUserProgress = await getuserProgress();
    // TODO GET USER SUBSCRIPTION

    const challenge = await db.query.challenges.findFirst({
        where: eq(challenges.id, challengeId),
    });
    if(!challenge){
        throw new Error("Challenge not found");
    }
    const lessonId = challenge.lessonId; 

    const existingChallengeProgress = await db.query.challengeProgress.findFirst({
        where: and(
            eq(challengeProgress.userId, userId),
            eq(challengeProgress.challengeId, challengeId),
        )
    });

    const isPratice = !!existingChallengeProgress;

    if(isPratice){
        return {error: "practice"}
    }

    if(!currentUserProgress){
        throw new Error("UserProgress not found");
    }

    if(currentUserProgress.hearts === 0){
        return {error: "hearts"};
    }

    await db.update(userProgress).set({
        hearts: Math.max(currentUserProgress.hearts -1, 0)
    }).where(eq(userProgress.userId, userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
};

export const refillHearts = async () =>{
    const currentUserProgress = await getuserProgress();
    if(!currentUserProgress){
        throw new Error("User progress not found"); 
    }

    if(currentUserProgress.hearts === 5){
        throw new Error("Hearts are already full");
    }

    if(currentUserProgress.points<pointsToRefil){
        throw new Error('Sem pontos o suficiete');
    }

    await db.update(userProgress).set({
        hearts: 5,
        points: currentUserProgress.points -pointsToRefil,
    }).where(eq(userProgress.userId, currentUserProgress.userId));

    revalidatePath('/shop');
    revalidatePath('/learn');
    revalidatePath('/quests');
    revalidatePath('/leaderboard');
}