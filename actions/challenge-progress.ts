"use server"

import db from "@/db/drizzle";
import { getuserProgress } from "@/db/queries";
import { questionProgress, questions, userProgress } from "@/db/schema";
import { auth } from "@clerk/nextjs/server"
import { error } from "console";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const upsertquestionProgress = async(questionId: number) =>{
    const {userId} = await auth();

    if(!userId){
        throw new Error("Não autorizado");
    }

    const currentUserProgress = await getuserProgress();
   //TODO: CARREGAR SUBSCRIPTION QUERY
   
   if(!currentUserProgress){
        throw new Error("User progress not found");
   }

   const  question = await db.query.questions.findFirst({
    where: eq(questions.id, questionId)
   })

   if(!question){
    throw new Error("question not found");
   }

   const lessonId = question.lessonId;

   const existingquestionProgress = await db.query.questionProgress.findFirst({
    where: and(
        eq(questionProgress.userId, userId),
        eq(questionProgress.questionId, questionId)
    ),
   });

   const isPraticing =  !!existingquestionProgress;

   //TODO not if uswr has substrciption
   if(currentUserProgress.hearts === 0 && !isPraticing){
        return{error:"hearts"};
   }

   if(isPraticing){
    await db.update(questionProgress).set({
        completed: true,
    }).where(
        eq(questionProgress.id, existingquestionProgress.id)
    );

    await db.update(userProgress).set({
        hearts: Math.min(currentUserProgress.hearts + 1, 5),
        points: currentUserProgress.points + 10,    
    }).where(eq(userProgress.userId, userId));
   
    revalidatePath("/learn");
    revalidatePath("/lesson");
    revalidatePath("/quests");
    revalidatePath("/leaderBoard");
    revalidatePath(`/lesson/${lessonId}`);
    return;
};

    await db.insert(questionProgress).values({
        questionId,
        userId,
        completed: true,
    });

    await db.update(userProgress).set({
        points: currentUserProgress.points + 10,
    }).where(eq(userProgress.userId, userId));
    revalidatePath("/learn");
    revalidatePath("/lesson");
    revalidatePath("/quests");
    revalidatePath("/leaderBoard");
    revalidatePath(`/lesson/${lessonId}`);
} 