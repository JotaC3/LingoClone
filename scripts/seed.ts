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

        await db.delete(schema.courses);//
        await db.delete(schema.userProgress);
        await db.delete(schema.units);//
        await db.delete(schema.lessons);//
        await db.delete(schema.challenges);//
        await db.delete(schema.challengeOptions);//
        await db.delete(schema.challengeProgress);
        

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Preparatório para Olímpiadas de astronomia",
                ImageSrc: '/mecanica.svg' //null
            }/* ,
            {
                id: 2,
                title: "Eletromagnetismo",
                ImageSrc: '/eletromag.svg'
            },
            {
                id: 3,
                title: "Óptica, Ondulatória e Termologia",
                ImageSrc: '/optica.svg'
            },
            {
                id: 4,
                title: "Todas",
                ImageSrc: '/todas.svg'
            } */
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1, // espanhool
                title: 'Unidade 1',
                Description: 'Astronomia',
                order: 1
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: 'Primeira Estrela',
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: 'Segunda Estrela',
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: 'Terceira Estrela',
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: 'Quarta Estrela',
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: 'Quinta Estrela',
            },
            {
                id: 6,
                unitId: 1,
                order: 6,
                title: 'Sexta Estrela',
            },
            {
                id: 7,
                unitId: 1,
                order: 7,
                title: 'Sexta Estrela',
            },
            {
                id: 8,
                unitId: 1,
                order: 8,
                title: 'Sexta Estrela',
            },
            {
                id: 9,
                unitId: 1,
                order: 9,
                title: 'Sexta Estrela',
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: 'SELCT',
                order: 1, 
                question: 'Qual das opções abaixo melhor descreve a Primeira Lei de Newton?'
            },
            {
                id: 2,
                lessonId: 1, 
                type: 'SELCT',
                order: 2,
                question: ' Em um pêndulo simples, a energia potencial é máxima em qual posição?'
            },
            {
                id: 3                               ,
                lessonId: 1, 
                type: 'SELCT',
                order: 3,
                question: 'O que é conservado em uma colisão elástica?'
            }
        ]);

        //challenge 1
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1,
                correct: false,
                text: 'A energia total em um sistema isolado permanece constante',
            },
            {
                challengeId: 1,
                correct: false,
                text: 'A força necessária para mover um objeto é proporcional à sua aceleração.',
            },
            {
                challengeId: 1,
                correct: true,
                text: 'Um objeto em repouso permanece em repouso a menos que uma força externa aja sobre ele.',
            }
        ]);

        //challenge 2
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 2,
                correct: false,
                text: ' No ponto mais baixo do movimento.',
            },
            {
                challengeId: 2,
                correct: true,
                text: 'No ponto mais alto do movimento.',
            },
            {
                challengeId: 2,
                correct: false,
                text: 'No ponto médio do movimento.',
            }
        ]);

        //challenge 3
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 3,
                correct: false,
                text: 'Apenas o momento linear.',
            },
            {
                challengeId: 3,
                correct: true,
                text: 'O momento linear e a energia cinética.',
            },
            {
                challengeId: 3,
                correct: false,
                text: 'Apenas a energia potencial.',
            }
        ]);
        

        // outro
        await db.insert(schema.challenges).values([
            {
                id: 4,
                lessonId: 2, //verbs
                type: 'SELCT',
                order: 2, //verbs 
                question: 'Complete a formula: F = m × ?'
            },
            {
                id: 5,
                lessonId: 2, //verbs 
                type: 'ASSIST',
                order: 2,
                question: '"O Homem"'
            },
            {
                id: 6                               ,
                lessonId: 2, //verbs
                type: 'SELCT',
                order: 3,
                question: 'Qual desse é o Robo?'
            }
        ]);
        console.log("Seeding finshed--------------------------------");
        
        
    } catch (error){
        console.log(error);
        throw new Error("Falha ao se conectar ao banco de dados");
        
    }
}

main();