"use server"

import db from "@/db/drizzle";
import { getuserProgress } from "@/db/queries";
import { questionProgress, questions, userProgress } from "@/db/schema";
import { auth } from "@clerk/nextjs/server"
import { error } from "console";
import { and, eq, inArray } from "drizzle-orm";
import { revalidatePath } from "next/cache";


export const upsertquestionProgress = async (questionId: number) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Não autorizado");
    }

    const currentUserProgress = await getuserProgress();
    // TODO: CARREGAR SUBSCRIPTION QUERY

    if (!currentUserProgress) {
        throw new Error("User progress not found");
    }

    // Buscar a questão atual
    const question = await db.query.questions.findFirst({
        where: eq(questions.id, questionId),
    });

    if (!question) {
        throw new Error("Question not found");
    }

    const lessonId = question.lessonId;

    // Buscar todas as questões com o mesmo `order` na mesma lição
    const questionsWithSameOrder = await db.query.questions.findMany({
        where: and(
            eq(questions.lessonId, lessonId),
            eq(questions.order, question.order)
        ),
    });

    if (questionsWithSameOrder.length === 0) {
        throw new Error("No questions found with the same order");
    }

    // Verificar se o usuário já completou alguma questão com o mesmo `order`
    const existingProgress = await db.query.questionProgress.findMany({
        where: and(
            eq(questionProgress.userId, userId),
            inArray(
                questionProgress.questionId,
                questionsWithSameOrder.map((q) => q.id)
            )
        ),
    });

    const isPracticing = existingProgress.length > 0;

    // Checar se o usuário tem corações disponíveis (apenas se não for prática)
    /* if (currentUserProgress.hearts === 0 && !isPracticing) {
        return { error: "hearts" };
    } */

    // Atualizar progresso de todas as questões com o mesmo `order`
    await Promise.all(
        questionsWithSameOrder.map(async (q) => {
            const progress = existingProgress.find((p) => p.questionId === q.id);

            if (progress) {
                // Atualizar progresso existente
                await db.update(questionProgress).set({
                    completed: true,
                }).where(eq(questionProgress.id, progress.id));
            } else {
                // Inserir novo progresso
                await db.insert(questionProgress).values({
                    questionId: q.id,
                    userId,
                    completed: true,
                });
            }
        })
    );

    // Atualizar progresso do usuário (incrementar pontos)
    await db.update(userProgress).set({
        /* hearts: isPracticing
            ? Math.min(currentUserProgress.hearts + 1, 5) 
            : currentUserProgress.hearts, */
        points: currentUserProgress.points + 10,
    }).where(eq(userProgress.userId, userId));

    // Revalidar as rotas relacionadas
    revalidatePath("/learn");
    revalidatePath("/lesson");
    revalidatePath("/quests");
    revalidatePath("/leaderBoard");
    revalidatePath(`/lesson/${lessonId}`);
};