import "dotenv/config";
import {drizzle} from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";

import * as schema from "../db/schema";
import { log } from "console";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, {schema});

const main = async () =>{
    try{
        console.log("Sedding db");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Espanhol",
                ImageSrc: '/ESP.svg'
            },
            {
                id: 2,
                title: "Inglês",
                ImageSrc: '/USA.svg'
            },
            {
                id: 3,
                title: "Japonês",
                ImageSrc: '/JP.svg'
            },
            {
                id: 4,
                title: "Italiano",
                ImageSrc: '/ITL.svg'
            }
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1, // espanhool
                title: 'Unidade 1',
                Description: 'Aprenda o básico de espanhol',
                order: 1
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: 'Nouns',
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: 'Verbs',
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: 'Colors',
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: 'Gerundio',
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: 'Frases',
            }
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: 'SELCT',
                order: 1, 
                question: 'Qual é "O Homem" ?'
            },/* ,
            {
                id: 2,
                lessonId: 2, // Essa é a lição chamada Verbs
                type: 'SELCT',
                order: 2,
                question: 'Marque o verbo  "Correr"?'
            } */
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                imageSrc: '/man.svg',
                correct: true,
                text: 'el ombre',
                audioSrc: '/es_man.mp3'
            },
            {
                id: 2,
                challengeId: 1,
                imageSrc: '/woman.svg',
                correct: false,
                text: 'la muler',
                audioSrc: '/es_woman.mp3'
            },
            {
                id: 3,
                challengeId: 1,
                imageSrc: '/robot.svg',
                correct: false,
                text: 'el roboto',
                audioSrc: '/es_robot.mp3'
            }
        ]);

        console.log("Seeding finshed--------------------------------");
        
        
    } catch (error){
        console.log(error);
        throw new Error("Falha ao se conectar ao banco de dados");
        
    }
}

main();