import { Description } from "@radix-ui/react-dialog";
import { relations } from "drizzle-orm";
import { boolean, integer, pgEnum, PgInteger, pgTable, point, serial, text } from "drizzle-orm/pg-core";
import { Questrial } from "next/font/google";
import { comment } from "postcss";
import { title } from "process";

//COMANDO PARA FAZER O PUSH DAS TABELAS: npx drizzle-kit push

export const courses = pgTable("courses", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    ImageSrc: text("image-src").notNull(),
});
export const coursesRelations = relations(courses, ({ many }) => ({
    userProgress: many(userProgress), 
    units: many(units),
}));
//...................

export const units = pgTable("units", {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    Description: text('description').notNull(),
    courseId: integer('course_id').references(() => courses.id, {onDelete: "cascade"}).notNull(),
    order: integer('order').notNull(), 
});
export const unitsRelations = relations(units, ({many, one}) => ({
    course: one(courses, {
        fields:[units.courseId],
        references: [courses.id]
    }),
    lessons: many(lessons),
}));

//...................................

export const lessons = pgTable("lessons", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    unitId: integer('unit_id').references(() => units.id, {onDelete: "cascade"}).notNull(),
    order: integer("order").notNull(),
});
export const lessonsRelations = relations(lessons, ({one, many}) => ({
    unit: one(units, {
        fields: [lessons.unitId],
        references: [units.id]
    }),
    questions: many(questions),
}));

//............................................

export const questionsEnum = pgEnum("type", ["SELCT", "ASSIST"]);

export const questions = pgTable("questions", {
    id: serial("id").primaryKey(),
    lessonId: integer('lesson_id').references(() => lessons.id, {onDelete: 'cascade'}).notNull(),
    type: questionsEnum("type"),
    question: text("question").notNull(),
    order: integer('order').notNull(),
    imageSrc: text('image_src'),
    comment: text("Comment")
});
export const questionsRelations = relations(questions, ({one, many}) => ({
    lesson: one(lessons, {
        fields: [questions.lessonId],
        references: [lessons.id],
    }),
    questionOptions: many(questionOptions),
    questionProgress: many(questionProgress)
}));



export const questionOptions = pgTable("question_options", {
    id: serial("id").primaryKey(),
    questionId: integer('question_id').references(() => questions.id, {onDelete: 'cascade'}).notNull(),
    text: text("text").notNull(),
    correct: boolean('correct').notNull(),
    imageSrc: text('image_src'),
    audioSrc: text('audio_src')
});
export const questionsOptionsRelations = relations(questionOptions, ({one}) => ({
    question: one(questions, {
        fields: [questionOptions.questionId],
        references: [questions.id],
    }),
}));



export const questionProgress = pgTable("question_progress", {
    id: serial("id").primaryKey(),
    userId: text('user_id').notNull(), // TODO CONFIRMAR Q ISSO NÃO QUEBRA
    questionId: integer('question_id').references(() => questions.id, {onDelete: 'cascade'}).notNull(),
    //text: text("text").notNull(),
    completed: boolean('completed').notNull().default(false)
});
export const questionProgressRelations = relations(questionProgress, ({one}) => ({
    question: one(questions, {
        fields: [questionProgress.questionId],
        references: [questions.id],
    }),
}));

//.......................................
export const userProgress = pgTable("user_progress", {
    userId: text("user_id").primaryKey(),
    userName: text("user_name").notNull().default("User"),
    userImageSrc: text("user_image_src").notNull().default("/mascot.svg"),
    activeCourseId: integer("active_course_id").references(() => courses.id, {onDelete: "cascade"}),
    hearts: integer("hearts").notNull().default(5),
    points: integer("points").notNull().default(0),
});   

export const userProgressRelations = relations(userProgress, ({one}) => ({
    activeCourse: one(courses, {
        fields: [userProgress.activeCourseId],
        references: [courses.id]
    }),
}));

/* a partir do 8:35:00 do vídeo Build a Duolingo Clone With Nextjs, React, Drizzle, Stripe (2024)

export const userSubscription = pgTable('user_subscription',{
     id:serial('id').primaryKey(),
     userId: serial('user_id').notNull().unique(),
     stripeCustomerId: text('stripe_costumer_id').notNull().unique(),
     
}) */
