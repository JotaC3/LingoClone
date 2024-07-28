"use server";

import db from "@/db/drizzle";
import { getCourseById, getuserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
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

    //TODO: Enable once units and lessons are added
/*     if(!course.units.length || !course.units[0].lessons.length){
        throw new Erro("Course is  empty")
    } */

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