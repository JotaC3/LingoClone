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
        await db.delete(schema.questions);//
        await db.delete(schema.questionOptions);//
        await db.delete(schema.questionProgress);
        

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
//.....................................................
        await db.insert(schema.questions).values([
            {
                id: 1,
                lessonId: 1,
                type: 'SELCT',
                order: 1, 
                question: 'A primeira lei de Kepler afirma que os planetas descrevem órbitas circulares ao redor do Sol.',
                imageSrc: null,
                comment: 'A primeira lei de Kepler afirma que os planetas descrevem órbitas elípticas com o Sol em um dos focos.'
            },
            {
                id: 2,
                lessonId: 1,
                type: 'SELCT',
                order: 1, 
                question: 'De acordo com a segunda lei de Kepler, os planetas se movem mais rápido quando estão mais próximos do Sol.',
                imageSrc: null,
                comment: 'A segunda lei, ou Lei das Áreas, afirma que os planetas varrem áreas iguais em tempos iguais, o que implica que eles se movem mais rápido no periélio (ponto mais próximo do Sol).'
            },
            {
                id: 3,
                lessonId: 1,
                type: 'SELCT',
                order: 1, 
                question: 'A terceira lei de Kepler estabelece que o quadrado do período orbital de um planeta é diretamente proporcional ao cubo da sua distância média ao Sol.',
                imageSrc: null,
                comment: 'A terceira lei relaciona o período orbital ao semieixo maior da órbita.'
            },
            {
                id: 4,
                lessonId: 1,
                type: 'SELCT',
                order: 1, 
                question: 'A primeira lei de Kepler se aplica apenas aos planetas do sistema solar.',
                imageSrc: null,
                comment: 'As leis de Kepler se aplicam a qualquer objeto que orbite outro objeto em uma trajetória elíptica, como satélites e luas.'
            },
            {
                id: 5,
                lessonId: 1,
                type: 'SELCT',
                order: 1, 
                question: 'A segunda lei de Kepler é também conhecida como a Lei dos Períodos.',
                imageSrc: null,
                comment: 'A segunda lei é conhecida como Lei das Áreas, e a terceira lei é a Lei dos Períodos.'
            },
            {
                id: 6,
                lessonId: 1,
                type: 'SELCT',
                order: 2, 
                question: 'De acordo com a terceira lei de Kepler, planetas mais distantes do Sol têm períodos orbitais mais longos.',
                imageSrc: null,
                comment: 'Quanto maior a distância de um planeta ao Sol, maior será o tempo que ele levará para completar uma órbita.'
            },
            {
                id: 7,
                lessonId: 1,
                type: 'SELCT',
                order: 2, 
                question: 'As órbitas elípticas dos planetas têm dois focos, e o Sol está localizado no centro da elipse.',
                imageSrc: null,
                comment: 'O Sol está localizado em um dos focos, não no centro da elipse.'
            },
            {
                id: 8,
                lessonId: 1,
                type: 'SELCT',
                order: 2, 
                question: 'A primeira lei de Kepler só se aplica ao movimento dos planetas, não podendo ser usada para entender o movimento de cometas.',
                imageSrc: null,
                comment: 'A primeira lei de Kepler também se aplica aos cometas e outros objetos com órbitas elípticas.'
            },
            {
                id: 9,
                lessonId: 1,
                type: 'SELCT',
                order: 2, 
                question: 'Segundo a terceira lei de Kepler, quanto maior a excentricidade da órbita de um planeta, maior será o seu período orbital.',
                imageSrc: null,
                comment: 'A terceira lei se refere ao semieixo maior da órbita, não à excentricidade.'
            },
            {
                id: 10,
                lessonId: 1,
                type: 'SELCT',
                order: 2, 
                question: 'A segunda lei de Kepler implica que um planeta em uma órbita elíptica tem uma velocidade constante durante todo o percurso.',
                imageSrc: null,
                comment: 'A segunda lei implica que a velocidade varia; o planeta se move mais rápido no periélio e mais devagar no afélio (ponto mais distante do Sol).'
            },
            {
                id: 11,
                lessonId: 1,
                type: 'SELCT',
                order: 3, 
                question: 'As Leis de Kepler são aplicáveis apenas aos planetas do Sistema Solar.',
                imageSrc: null,
                comment: 'As Leis de Kepler são aplicáveis a qualquer sistema de corpos celestes que obedeçam à lei da gravitação, como luas, satélites artificiais e exoplanetas.'
            },
            {
                id: 12,
                lessonId: 1,
                type: 'SELCT',
                order: 3, 
                question: 'A primeira lei de Kepler sugere que a distância entre o planeta e o Sol permanece constante ao longo da órbita.',
                imageSrc: null,
                comment: 'A distância varia, pois a órbita é elíptica, e o planeta se aproxima do Sol no periélio e se afasta no afélio.'
            },
            {
                id: 13,
                lessonId: 1,
                type: 'SELCT',
                order: 3, 
                question: 'A excentricidade de uma órbita elíptica define quão alongada é a órbita de um corpo ao redor do Sol.',
                imageSrc: null,
                comment: 'A excentricidade determina o grau de achatamento ou alongamento da elipse.'
            },
            {
                id: 14,
                lessonId: 1,
                type: 'SELCT',
                order: 3, 
                question: 'A terceira lei de Kepler pode ser usada para calcular o período orbital de qualquer planeta, desde que sua distância média ao Sol seja conhecida.',
                imageSrc: null,
                comment: 'A terceira lei permite calcular o período orbital com base na distância ao Sol.'
            },
            {
                id: 15,
                lessonId: 1,
                type: 'SELCT',
                order: 3, 
                question: 'As Leis de Kepler foram inicialmente formuladas para explicar o movimento dos satélites artificiais.',
                imageSrc: null,
                comment: 'As Leis de Kepler foram formuladas para descrever o movimento dos planetas ao redor do Sol.'
            },
            {
                id: 16,
                lessonId: 1,
                type: 'SELCT',
                order: 4, 
                question: 'A segunda lei de Kepler afirma que todos os planetas têm a mesma velocidade orbital, independentemente da distância ao Sol.',
                imageSrc: null,
                comment: 'A segunda lei afirma que a velocidade varia; quanto mais perto do Sol, mais rápido o planeta se move.'
            },
            {
                id: 17,
                lessonId: 1,
                type: 'SELCT',
                order: 4, 
                question: 'A terceira lei de Kepler ajuda a explicar por que os planetas mais próximos do Sol têm períodos orbitais mais curtos.',
                imageSrc: null,
                comment: 'A terceira lei relaciona o período orbital à distância do Sol, com planetas mais próximos tendo órbitas mais rápidas.'
            },
            {
                id: 18,
                lessonId: 1,
                type: 'SELCT',
                order: 4, 
                question: 'As Leis de Kepler dependem do pressuposto de que a gravidade entre o Sol e os planetas é inversamente proporcional ao quadrado da distância entre eles.',
                imageSrc: null,
                comment: 'As Leis de Kepler estão de acordo com a Lei da Gravitação Universal de Newton.'
            },
            {
                id: 19,
                lessonId: 1,
                type: 'SELCT',
                order: 4, 
                question: 'A segunda lei de Kepler indica que a força gravitacional exercida sobre um planeta é constante em todos os pontos de sua órbita.',
                imageSrc: null,
                comment: 'A força gravitacional varia conforme a distância entre o planeta e o Sol, sendo maior quando o planeta está mais próximo do Sol.'
            },
            {
                id: 20,
                lessonId: 1,
                type: 'SELCT',
                order: 4, 
                question: 'As órbitas descritas pelas Leis de Kepler são todas perfeitamente circulares.',
                imageSrc: null,
                comment: 'As órbitas descritas pelas Leis de Kepler são elípticas, e não circulares.'
            },
            {
                id: 21,
                lessonId: 1,
                type: 'SELCT',
                order: 5,
                question: 'A primeira lei de Kepler exclui a possibilidade de trajetórias circulares',
                imageSrc: null,
                comment: 'A primeira lei de Kepler não exclui a possibilidade de trajetórias circulares, já que a circunferência é um caso particular de elipse.'
            },
            {
                id: 22,
                lessonId: 1,
                type: 'SELCT',
                order: 5,
                question: 'As leis de Kepler podem ser utilizadas para o estudo do movimento dos planetas ao redor do Sol e do movimento de satélites naturais e artificiais ao redor de planetas.',
                imageSrc: null,
                comment: 'As leis do movimento planetário de Kepler são conhecidas como: lei das órbitas elípticas, lei das áreas e lei dos períodos. Juntas estas explicam como funciona o movimento de qualquer corpo orbitando algum astro massivo, como planetas ou estrelas e satélites.'
            },
            {
                id: 23,
                lessonId: 1,
                type: 'SELCT',
                order: 5,
                question: 'A circunferência pode ser considerada como uma elipse de excentricidade zero?',
                imageSrc: null,
                comment: 'Se a excentricidade é zero, a elipse é um círculo perfeito, pois os dois focos coincidem no centro.'
            },
            {
                id: 24,
                lessonId: 1,
                type: 'SELCT',
                order: 5,
                question: 'Quando a excentricidade de uma elipse aumenta, a distância entre os focos também aumenta.',
                imageSrc: null,
                comment: 'Quanto maior a excentricidade, mais distantes os focos estarão um do outro.'
            },
            {
                id: 25,
                lessonId: 1,
                type: 'SELCT',
                order: 5,
                question: 'A excentricidade de uma elipse pode assumir valores entre 0 e 2.',
                imageSrc: null,
                comment: 'A excentricidade de uma elipse varia entre 0 e 1. Acima de 1, a forma se torna uma parábola ou hipérbole.'
            },
            {
                id: 26,
                lessonId: 2,
                type: 'SELCT',
                order: 1,
                question: 'A excentricidade de uma órbita elíptica é sempre menor que 1.',
                imageSrc: null,
                comment: 'A excentricidade de uma elipse é sempre menor que 1; se fosse 1, a órbita seria uma parábola.'
            },
            {
                id: 27,
                lessonId: 2,
                type: 'SELCT',
                order: 1,
                question: 'Se a excentricidade de uma elipse é próxima de 1, a forma da órbita é quase parabólica.',
                imageSrc: null,
                comment: 'Quando a excentricidade se aproxima de 1, a elipse se alonga e quase se torna uma parábola.'
            },
            {
                id: 28,
                lessonId: 2,
                type: 'SELCT',
                order: 1,
                question: 'A excentricidade de uma elipse está diretamente relacionada à razão entre a distância dos focos e o semieixo menor.',
                imageSrc: null,
                comment: 'A excentricidade está relacionada à razão entre a distância dos focos e o semieixo maior da elipse.'
            },
            {
                id: 29,
                lessonId: 2,
                type: 'SELCT',
                order: 1,
                question: 'Quando a excentricidade de uma órbita elíptica é maior, o objeto se move com velocidade mais constante ao longo da órbita.',
                imageSrc: null,
                comment: 'Em uma órbita com maior excentricidade, a velocidade varia significativamente, sendo maior no periélio (ponto mais próximo do foco) e menor no afélio (ponto mais distante).'
            },
            {
                id: 30,
                lessonId: 2,
                type: 'SELCT',
                order: 1,
                question: 'Na astronomia, a excentricidade de uma órbita planetária pode determinar a variação da distância do planeta em relação ao Sol.',
                imageSrc: null,
                comment: 'Quanto maior a excentricidade, maior será a variação de distância entre o planeta e o Sol ao longo da órbita.'
            },
            {
                id: 31,
                lessonId: 2,
                type: 'SELCT',
                order: 2,
                question: 'As órbitas da Terra e de alguns outros planetas como Vênus e Netuno, apesar de elípticas, são muito próximas de um círculo.',
                imageSrc: null,
                comment: 'A excentricidade da órbita da Terra é atualmente cerca de 0.0167, de Vênus, 0.007 e de Netuno, 0.012. As órbitas desses planetas são muito próximas de 0, o que indica que são quase circulares.'
            },
            {
                id: 32,
                lessonId: 2,
                type: 'SELCT',
                order: 2,
                question: 'O afélio é o ponto da órbita de um planeta em que ele está mais distante do Sol.',
                imageSrc: null,
                comment: 'O afélio é o ponto mais distante da órbita elíptica em relação ao Sol.'
            },
            {
                id: 33,
                lessonId: 2,
                type: 'SELCT',
                order: 2,
                question: 'O periélio é o ponto da órbita onde o planeta está mais próximo do Sol.',
                imageSrc: null,
                comment: 'No periélio, o planeta está mais perto do Sol, e sua velocidade orbital é máxima.'
            },
            {
                id: 34,
                lessonId: 2,
                type: 'SELCT',
                order: 2,
                question: 'Durante o afélio, a velocidade orbital de um planeta é maior do que no periélio.',
                imageSrc: null,
                comment: 'A velocidade orbital é menor no afélio devido à menor atração gravitacional do Sol.'
            },
            {
                id: 35,
                lessonId: 2,
                type: 'SELCT',
                order: 2,
                question: 'A distância entre o Sol e um planeta no periélio é sempre maior que a distância no afélio.',
                imageSrc: null,
                comment: 'No periélio, a distância é menor, e no afélio, é maior.'
            },
            {
                id: 36,
                lessonId: 2,
                type: 'SELCT',
                order: 3,
                question: 'A diferença entre a distância do afélio e do periélio de um planeta é maior quanto maior for a excentricidade da sua órbita.',
                imageSrc: null,
                comment: 'Quanto maior a excentricidade, maior a diferença entre as distâncias no afélio e periélio.'
            },
            {
                id: 37,
                lessonId: 2,
                type: 'SELCT',
                order: 3,
                question: 'A Terra atinge seu afélio por volta do mês de julho.',
                imageSrc: null,
                comment: 'O afélio da Terra ocorre geralmente no início de julho.'
            },
            {
                id: 38,
                lessonId: 2,
                type: 'SELCT',
                order: 3,
                question: 'A velocidade de um planeta é constante em toda a sua órbita elíptica.',
                imageSrc: null,
                comment: 'A velocidade varia, sendo maior no periélio e menor no afélio.'
            },
            {
                id: 39,
                lessonId: 2,
                type: 'SELCT',
                order: 3,
                question: 'No periélio, a força gravitacional exercida pelo Sol sobre o planeta é menor do que no afélio.',
                imageSrc: null,
                comment: 'No periélio, a força gravitacional é maior devido à menor distância entre o planeta e o Sol.'
            },
            {
                id: 40,
                lessonId: 2,
                type: 'SELCT',
                order: 3,
                question: 'O afélio da Terra está localizado a aproximadamente 147 milhões de quilômetros do Sol.',
                imageSrc: null,
                comment: 'O afélio da Terra está localizado a aproximadamente 152 milhões de quilômetros do Sol.'
            },
            {
                id: 41,
                lessonId: 2,
                type: 'SELCT',
                order: 4,
                question: 'As variações de distância da Terra ao Sol entre periélio e afélio têm um impacto significativo nas estações do ano.',
                imageSrc: null,
                comment: 'As estações do ano são causadas pela inclinação do eixo terrestre, e não pela distância ao Sol no periélio e afélio.'
            },
            {
                id: 42,
                lessonId: 2,
                type: 'SELCT',
                order: 4,
                question: 'O apogeu é o ponto da órbita de um satélite em que ele está mais próximo da Terra.',
                imageSrc: null,
                comment: 'O apogeu é o ponto mais distante da órbita em relação à Terra.'
            },
            {
                id: 43,
                lessonId: 2,
                type: 'SELCT',
                order: 4,
                question: 'O perigeu é o ponto da órbita de um satélite onde ele está mais próximo da Terra.',
                imageSrc: null,
                comment: 'No perigeu, o satélite está no ponto mais próximo da Terra.'
            },
            {
                id: 44,
                lessonId: 2,
                type: 'SELCT',
                order: 4,
                question: 'A velocidade de um satélite é maior no apogeu do que no perigeu.',
                imageSrc: null,
                comment: 'A velocidade é maior no perigeu, pois a força gravitacional da Terra é maior.'
            },
            {
                id: 45,
                lessonId: 2,
                type: 'SELCT',
                order: 4,
                question: 'A força gravitacional exercida pela Terra sobre um satélite é menor no apogeu do que no perigeu.',
                imageSrc: null,
                comment: 'A gravidade diminui com a distância, sendo menor no apogeu.'
            },
            {
                id: 46,
                lessonId: 2,
                type: 'SELCT',
                order: 5,
                question: 'Satélites em órbitas elípticas movem-se mais lentamente no apogeu e mais rapidamente no perigeu.',
                imageSrc: null,
                comment: 'A velocidade orbital varia com a distância à Terra, conforme as leis de Kepler.'
            },
            {
                id: 47,
                lessonId: 2,
                type: 'SELCT',
                order: 5,
                question: 'O perigeu de um satélite artificial é sempre maior do que o apogeu.',
                imageSrc: null,
                comment: 'O perigeu é sempre o ponto mais próximo da Terra, e o apogeu é o mais distante.'
            },
            {
                id: 48,
                lessonId: 2,
                type: 'SELCT',
                order: 5,
                question: 'A órbita da Lua em torno da Terra apresenta apogeu e perigeu.',
                imageSrc: null,
                comment: 'A órbita da Lua é elíptica, com apogeu e perigeu.'
            },
            {
                id: 49,
                lessonId: 2,
                type: 'SELCT',
                order: 5,
                question: 'No apogeu, a altitude de um satélite em relação à superfície da Terra é máxima.',
                imageSrc: null,
                comment: 'O apogeu é o ponto mais alto da órbita em relação à Terra.'
            },
            {
                id: 50,
                lessonId: 2,
                type: 'SELCT',
                order: 5,
                question: 'A altitude de um satélite no perigeu influencia diretamente a velocidade necessária para mantê-lo em órbita.',
                imageSrc: null,
                comment: 'Quanto mais próximo da Terra (perigeu), maior a velocidade orbital necessária.'
            },
            {
                id: 51,
                lessonId: 3,
                type: 'SELCT',
                order: 1,
                question: 'O termo perigeu é usado exclusivamente para satélites artificiais.',
                imageSrc: null,
                comment: 'O termo também se aplica à órbita da Lua e de outros objetos naturais ao redor da Terra.'
            },
            {
                id: 52,
                lessonId: 3,
                type: 'SELCT',
                order: 1,
                question: 'Os satélites artificiais que orbitam a Terra obedecem às leis de Kepler.',
                imageSrc: null,
                comment: 'Assim como os planetas em torno do Sol, os satélites seguem órbitas elípticas, com a Terra em um dos focos da elipse.'
            },
            {
                id: 53,
                lessonId: 3,
                type: 'SELCT',
                order: 1,
                question: 'A segunda lei de Kepler indica que os satélites se movem com velocidade constante ao longo de suas órbitas.',
                imageSrc: null,
                comment: 'A segunda lei afirma que o satélite se move mais rápido quando está mais próximo da Terra e mais lentamente quando está mais distante.'
            },
            {
                id: 54,
                lessonId: 3,
                type: 'SELCT',
                order: 1,
                question: 'A terceira lei de Kepler pode ser usada para calcular o período orbital de um satélite em relação à sua altitude acima da Terra.',
                imageSrc: null,
                comment: 'A terceira lei relaciona o período orbital à distância do corpo central, permitindo calcular o período orbital de satélites.'
            },
            {
                id: 55,
                lessonId: 3,
                type: 'SELCT',
                order: 1,
                question: 'A força gravitacional entre a Terra e um satélite é constante ao longo da órbita do satélite.',
                imageSrc: null,
                comment: 'A força gravitacional varia conforme a distância entre o satélite e a Terra, sendo maior no ponto mais próximo (perigeu) e menor no ponto mais distante (apogeu).'
            },
            {
                id: 56,
                lessonId: 3,
                type: 'SELCT',
                order: 2,
                question: 'Os satélites geoestacionários seguem órbitas circulares conforme as leis de Kepler.',
                imageSrc: null,
                comment: 'Satélites geoestacionários têm órbitas circulares e permanecem sempre acima do mesmo ponto na Terra.'
            },
            {
                id: 57,
                lessonId: 3,
                type: 'SELCT',
                order: 2,
                question: 'Satélites com órbitas mais distantes da Terra têm períodos orbitais mais curtos, conforme a terceira lei de Kepler.',
                imageSrc: null,
                comment: 'A terceira lei de Kepler afirma que satélites em órbitas mais distantes têm períodos orbitais mais longos.'
            },
            {
                id: 58,
                lessonId: 3,
                type: 'SELCT',
                order: 2,
                question: 'A excentricidade da órbita de um satélite influencia a variação de sua velocidade ao longo de sua trajetória.',
                imageSrc: null,
                comment: 'Quanto maior a excentricidade, maior será a variação de velocidade ao longo da órbita.'
            },
            {
                id: 59,
                lessonId: 3,
                type: 'SELCT',
                order: 2,
                question: 'A primeira lei de Kepler se aplica apenas a satélites naturais, como a Lua, e não a satélites artificiais.',
                imageSrc: null,
                comment: 'A primeira lei se aplica tanto a satélites naturais quanto artificiais, ambos seguem órbitas elípticas.'
            },
            {
                id: 60,
                lessonId: 3,
                type: 'SELCT',
                order: 2,
                question: 'A órbita de um satélite sempre segue a direção oeste para leste, conforme as leis de Kepler.',
                imageSrc: null,
                comment: 'A direção da órbita de um satélite pode variar, sendo determinada pelo objetivo da missão, e não necessariamente segue uma trajetória de oeste para leste.'
            },
            {
                id: 61,
                lessonId: 3,
                type: 'SELCT',
                order: 3,
                question: 'A aplicação das leis de Kepler aos satélites artificiais permite prever com precisão o comportamento de suas órbitas ao redor da Terra.',
                imageSrc: null,
                comment: 'As leis de Kepler ajudam a calcular e prever a órbita de satélites artificiais ao redor da Terra.'
            },
            {
                id: 62,
                lessonId: 3,
                type: 'SELCT',
                order: 3,
                question: 'Um cometa descreve uma órbita elíptica em torno do Sol. O raio médio desse cometa pode ser descrito como a distância do cometa no periélio mais sua distância no afélio dividido por dois.',
                imageSrc: null,
                comment: 'O raio médio R é calculado pela média aritmética entre os raios do periélio e do afélio.'
            },
            {
                id: 63,
                lessonId: 3,
                type: 'SELCT',
                order: 3,
                question: 'Quando o dia em que ocorre uma Lua Cheia coincide com o dia em que ela passa pelo perigeu (mais próxima da Terra) ela pode se apresentar até cerca de 30% mais brilhante que uma Lua Cheia no apogeu (mais afastada da Terra). Esse fenômeno é conhecido como Super Lua.',
                imageSrc: 'Lua Cheia',
                comment: 'O fenômeno da Super Lua ocorre porque a trajetória lunar não é circular, é elíptica de forma que ao atingir o ponto mais próximo da Terra temos apenas um aumento aparente devido à proximidade. Esse fenômeno é conhecido como Super Lua.'
            },
            {
                id: 64,
                lessonId: 3,
                type: 'SELCT',
                order: 3,
                question: 'Para a terceira lei de Kepler (lei dos períodos), o período de rotação de um planeta em torno de seu eixo é tanto maior quanto maior for seu período de revolução.',
                imageSrc: null,
                comment: 'A terceira lei de Kepler (lei dos períodos) afirma que os quadrados dos períodos T de revolução dos planetas (tempo que demora para efetuar uma volta completa em torno do Sol) são proporcionais aos cubos das suas distâncias médias R ao Sol. Este enunciado não se refere ao período de rotação (em torno de si mesmo, dia do planeta). Cada planeta tem um dia de duração própria, que dependerá de sua velocidade de rotação e de seu diâmetro.'
            },
            {
                id: 65,
                lessonId: 3,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: ''
            },
            {
                id: 66,
                lessonId: 3,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: ''
            },
            {
                id: 68,
                lessonId: 3,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: ''
            },
            {
                id: 69,
                lessonId: 3,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: ''
            },
            {
                id: 70,
                lessonId: 3,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: ''
            },
            {
                id: 71,
                lessonId: 3,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: ''
            },
            {
                id: 72,
                lessonId: 3,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: ''
            },
            {
                id: 73,
                lessonId: 3,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: ''
            },
            {
                id: 74,
                lessonId: 3,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: ''
            },
            {
                id: 75,
                lessonId: 3,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: ''
            },
            {
                id: 76,
                lessonId: 4,
                type: 'SELCT',
                order: 1,
                question: 'As leis do movimento planetário de Kepler são conhecidas como:',
                imageSrc: null,
                comment: null
            },
            {
                id: 77,
                lessonId: 4,
                type: 'SELCT',
                order: 1,
                question: '(ONC 2019 ADAPTADA) O cálculo de quanto tempo leva um planeta para orbitar o Sol está relacionado com qual das Leis de Kepler?',
                imageSrc: null,
                comment: null
            },
            {
                id: 78,
                lessonId: 4,
                type: 'SELCT',
                order: 1,
                question: '(ONC 2023 ADAPTADA) Quanto mais “achatada” a órbita, mais ela se diferencia de uma circunferência. Como os planetas rochosos têm órbitas de dimensões muito diferentes, o tamanho aparente do Sol em seus respectivos céus varia muito de um para o outro. Na figura a seguir, vemos os tamanhos aparentes relativos do Sol vistos do periélio e afélio de cada um dos quatro planetas rochosos do Sistema Solar. Baseado na imagem e em seus conhecimentos, marque a afirmação correta.',
                imageSrc: 'orbitas dos planetas',
                comment: null
            },
            {
                id: 79,
                lessonId: 4,
                type: 'SELCT',
                order: 1,
                question: 'A tabela mostra os valores de excentricidade de órbita dos planetas que compõem o sistema solar. Na prática, quanto menor o valor da excentricidade (mais próximo de zero), mais circular é o formato da elipse. Na tabela verificamos os planetas cujas suas trajetórias são mais elípticas são:',
                imageSrc: 'tabela excetricidade',
                comment: null
            },
            {
                id: 80,
                lessonId: 4,
                type: 'SELCT',
                order: 1,
                question: 'Em seu movimento em torno do Sol, o nosso planeta obedece às leis de Kepler. A tabela a seguir mostra, em ordem alfabética, os 4 planetas mais próximos do Sol: Baseando-se na tabela apresentada acima, só é CORRETO concluir que:',
                imageSrc: 'Distancia do sol',
                comment: 'Pela 3° Lei de Kepler, quanto mais distante do Sol orbitar o planeta, mais longo é seu ano. Portanto, os chamados planetas internos, Mercúrio e Vênus, têm anos mais curtos do que o ano terrestre.'
            },
            {
                id: 81,
                lessonId: 4,
                type: 'SELCT',
                order: 2,
                question: 'A tabela mostra os valores de excentricidade de órbita dos planetas que compõem o sistema solar. Na prática, quanto menor o valor da excentricidade (mais próximo de zero), mais circular é o formato da elipse. Na tabela verificamos os planetas cujas suas trajetórias são mais próximas de uma circunferência são:',
                imageSrc: 'Tabela de planetas',
                comment: null
            },
            {
                id: 82,
                lessonId: 4,
                type: 'SELCT',
                order: 2,
                question: 'A Terceira Lei de Kepler afirma que:',
                imageSrc: null,
                comment: null
            },
            {
                id: 83,
                lessonId: 4,
                type: 'SELCT',
                order: 2,
                question: 'De acordo com a Terceira Lei de Kepler, qual das opções é verdadeira?',
                imageSrc: null,
                comment: null
            },
            {
                id: 84,
                lessonId: 4,
                type: 'SELCT',
                order: 2,
                question: 'Em que unidades o período orbital (P) e a distância média (r) devem ser medidos para a Terceira Lei de Kepler ser aplicada corretamente no Sistema Solar?',
                imageSrc: null,
                comment: null
            },
            {
                id: 85,
                lessonId: 4,
                type: 'SELCT',
                order: 2,
                question: 'Segundo a Terceira Lei de Kepler, quanto maior for a distância média de um planeta ao Sol:',
                imageSrc: null,
                comment: null
            },
            {
                id: 86,
                lessonId: 4,
                type: 'SELCT',
                order: 3,
                question: 'Qual dos exemplos a seguir ilustra corretamente a Terceira Lei de Kepler?',
                imageSrc: null,
                comment: null
            },
            {
                id: 87,
                lessonId: 4,
                type: 'SELCT',
                order: 3,
                question: 'De acordo com a Terceira Lei de Kepler, para satélites orbitando a Terra, se um satélite está mais distante da Terra do que outro, o seu período orbital será:',
                imageSrc: null,
                comment: 'A Terceira Lei de Kepler afirma que o quadrado do período orbital é proporcional ao cubo da distância média ao corpo central (no caso, a Terra). Assim, quanto maior a distância, maior será o período orbital, ou seja, o satélite mais distante leva mais tempo para completar uma órbita.'
            },
            {
                id: 88,
                lessonId: 4,
                type: 'SELCT',
                order: 3,
                question: 'A Terceira Lei de Kepler, aplicada a satélites orbitando um planeta, afirma que:',
                imageSrc: null,
                comment: 'A equação da Terceira Lei de Kepler é T² = r³, onde T é o período orbital e r é a distância média ao planeta. Isso significa que satélites mais distantes têm períodos orbitais maiores.'
            },
            {
                id: 89,
                lessonId: 4,
                type: 'SELCT',
                order: 3,
                question: 'Para dois satélites orbitando o mesmo planeta, qual das afirmações está correta com base na Terceira Lei de Kepler?',
                imageSrc: null,
                comment: 'A Terceira Lei de Kepler relaciona o período orbital com a distância ao planeta. O satélite mais distante tem um período maior, ou seja, leva mais tempo para orbitar.'
            },
            {
                id: 90,
                lessonId: 4,
                type: 'SELCT',
                order: 3,
                question: 'Aplicando a Terceira Lei de Kepler ao movimento dos satélites artificiais em torno da Terra, podemos dizer que, se a distância de um satélite aumenta, seu período orbital:',
                imageSrc: null,
                comment: null
            },
            {
                id: 91,
                lessonId: 4,
                type: 'SELCT',
                order: 4,
                question: 'Para um satélite geoestacionário, que permanece sobre o mesmo ponto da Terra, seu período orbital é de:',
                imageSrc: null,
                comment: 'Satélites geoestacionários orbitam a Terra com um período orbital de 24 horas, o que permite que eles permaneçam fixos em relação a um ponto específico na superfície da Terra.'
            },
            {
                id: 92,
                lessonId: 4,
                type: 'SELCT',
                order: 4,
                question: 'Qual é a relação entre a distância ao centro da Terra e o período orbital de um satélite?',
                imageSrc: null,
                comment: 'Quanto maior a distância entre o satélite e o centro da Terra, maior será o período orbital, como indicado pela Terceira Lei de Kepler.'
            },
            {
                id: 93,
                lessonId: 4,
                type: 'SELCT',
                order: 4,
                question: 'Em relação ao movimento dos satélites, a Terceira Lei de Kepler é válida porque:',
                imageSrc: null,
                comment: 'A Terceira Lei de Kepler estabelece uma relação direta entre a distância média de um corpo em órbita (como um satélite) e seu período orbital, tornando possível prever a duração de uma órbita com base na distância.'
            },
            {
                id: 94,
                lessonId: 4,
                type: 'SELCT',
                order: 4,
                question: 'Na noite do dia 17 de outubro de 2024 aconteceu o chamado fenômeno da Super Lua. A informação transmitida por muitos dos veículos de comunicação era de que, naquela noite, “a lua cheia aumentaria de tamanho”. Essa afirmativa não é cientificamente correta, visto que a Lua em si mantém seu tamanho natural. Qual a explicação mais correta para o fenômeno?',
                imageSrc: 'Super Lua',
                comment: 'O fenômeno da Super Lua ocorre porque a trajetória lunar não é circular, é elíptica de forma que ao atingir o ponto mais próximo da Terra temos apenas um aumento aparente devido à proximidade. Quando o dia em que ocorre uma Lua Cheia coincide com o dia em que ela passa pelo perigeu (mais próxima da Terra), ela pode se apresentar até cerca de 30% mais brilhante que uma Lua Cheia no apogeu (mais afastada da Terra). Esse fenômeno é conhecido como Super Lua.'
            },
            {
                id: 95,
                lessonId: 4,
                type: 'SELCT',
                order: 4,
                question: 'Atualmente, a Lua afasta-se da Terra a uma razão média aproximada de 4 cm/ano. Considerando as Leis de Kepler, é correto concluir que o período de',
                imageSrc: 'Terra e Lua',
                comment: 'A 3° Lei de Kepler diz que os quadrados dos períodos T de revolução dos planetas são proporcionais aos cubos das suas distâncias médias. Se a distância média R da Lua à Terra aumenta, e ela é proporcional ao período de translação T da Lua ao redor da Terra, este período também deve aumentar.'
            },
            {
                id: 96,
                lessonId: 4,
                type: 'SELCT',
                order: 5,
                question: 'As leis de Kepler trouxeram uma nova compreensão para a mecânica celeste. Elas possibilitaram analisar as trajetórias, períodos e distâncias de corpos celestes. De acordo com as Leis de Kepler, é CORRETO afirmar que o:',
                imageSrc: null,
                comment: 'De acordo com a primeira lei de Kepler, as órbitas são elípticas ao redor do Sol, sendo que o Sol está localizado em um dos focos. No caso de A, a velocidade do planeta aumenta quando o corpo se aproxima do Sol. No caso de C e D, o período de translação só depende da distância entre o planeta e o Sol.'
            },
            {
                id: 97,
                lessonId: 4,
                type: 'SELCT',
                order: 5,
                question: 'A Segunda Lei de Kepler afirma que:',
                imageSrc: null,
                comment: 'Esta é a essência da Segunda Lei de Kepler, também chamada de Lei das Áreas. Ela afirma que um planeta percorre áreas iguais em sua órbita ao redor do Sol em tempos iguais, o que significa que a velocidade do planeta varia ao longo de sua órbita — mais rápido no periélio (mais próximo do Sol) e mais lento no afélio (mais distante).'
            },
            {
                id: 98,
                lessonId: 4,
                type: 'SELCT',
                order: 5,
                question: 'O que a Segunda Lei de Kepler implica sobre a velocidade de um planeta em sua órbita?',
                imageSrc: null,
                comment: 'De acordo com a Segunda Lei de Kepler, o planeta se move mais rapidamente em sua órbita quando está no periélio (mais próximo do Sol) e mais lentamente no afélio (mais distante do Sol), porque a linha entre o planeta e o Sol varre áreas iguais em tempos iguais.'
            },
            {
                id: 99,
                lessonId: 4,
                type: 'SELCT',
                order: 5,
                question: 'De acordo com a Segunda Lei de Kepler, quando um planeta se move mais rapidamente em sua órbita?',
                imageSrc: null,
                comment: null
            },
            {
                id: 100,
                lessonId: 4,
                type: 'SELCT',
                order: 5,
                question: 'Se um cometa tem uma órbita muito elíptica ao redor do Sol, em que ponto da sua órbita ele se moverá mais rápido?',
                imageSrc: null,
                comment: 'A Segunda Lei de Kepler indica que o cometa se move mais rapidamente quando está mais próximo do periélio, o ponto mais próximo do Sol, devido à maior força gravitacional exercida pelo Sol nesse ponto.'
            },
            {
                id: 101,
                lessonId: 5,
                type: 'SELCT',
                order: 1,
                question: 'O que acontece com a velocidade de um planeta ao longo de sua órbita de acordo com a Segunda Lei de Kepler?',
                imageSrc: null,
                comment: 'A velocidade de um planeta aumenta à medida que se aproxima do periélio, o ponto da órbita mais próximo do Sol, e diminui conforme se afasta, aproximando-se do afélio.'
            },
            {
                id: 102,
                lessonId: 5,
                type: 'SELCT',
                order: 1,
                question: 'De acordo com a Segunda Lei de Kepler, por que a velocidade de um planeta varia ao longo de sua órbita?',
                imageSrc: null,
                comment: 'A variação da velocidade ocorre porque a distância entre o planeta e o Sol muda ao longo da órbita. Mais próximo do Sol (no periélio), a força gravitacional é maior, e o planeta se move mais rapidamente; mais distante (no afélio), o planeta se move mais lentamente.'
            },
            {
                id: 103,
                lessonId: 5,
                type: 'SELCT',
                order: 1,
                question: 'Um planeta em órbita ao redor de uma estrela fictícia se move mais rápido quando:',
                imageSrc: null,
                comment: 'A Segunda Lei de Kepler se aplica a qualquer sistema planetário: o planeta se move mais rapidamente quando está mais próximo da estrela devido à maior atração gravitacional.'
            },
            {
                id: 104,
                lessonId: 5,
                type: 'SELCT',
                order: 1,
                question: 'Qual das opções a seguir melhor descreve a Segunda Lei de Kepler?',
                imageSrc: null,
                comment: 'A Segunda Lei de Kepler é a Lei das Áreas Iguais, que afirma que a linha entre um planeta e o Sol varre áreas iguais em tempos iguais, implicando que o planeta se move mais rápido no periélio e mais devagar no afélio.'
            },
            {
                id: 105,
                lessonId: 5,
                type: 'SELCT',
                order: 1,
                question: 'O que acontece com a área varrida pela linha que liga um planeta ao Sol durante um intervalo de tempo fixo, independentemente da posição do planeta na órbita?',
                imageSrc: null,
                comment: 'De acordo com a Segunda Lei de Kepler, a área varrida pela linha que conecta o planeta ao Sol é sempre constante em intervalos de tempo iguais, independentemente da posição do planeta na órbita.'
            },
            {
                id: 106,
                lessonId: 5,
                type: 'SELCT',
                order: 2,
                question: 'Por que a Segunda Lei de Kepler é importante para entender o movimento orbital dos planetas?',
                imageSrc: null,
                comment: 'A Segunda Lei de Kepler é crucial para entender como a velocidade de um planeta varia ao longo de sua órbita elíptica: ela mostra que a velocidade do planeta depende de sua distância ao Sol, sendo maior no periélio e menor no afélio.'
            },
            {
                id: 107,
                lessonId: 5,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 108,
                lessonId: 5,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 109,
                lessonId: 5,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 110,
                lessonId: 5,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 111,
                lessonId: 5,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 112,
                lessonId: 5,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 113,
                lessonId: 5,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 114,
                lessonId: 5,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 115,
                lessonId: 5,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 116,
                lessonId: 5,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 117,
                lessonId: 5,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 118,
                lessonId: 5,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 119,
                lessonId: 5,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 120,
                lessonId: 5,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 121,
                lessonId: 5,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 122,
                lessonId: 5,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 123,
                lessonId: 5,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 124,
                lessonId: 5,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 125,
                lessonId: 5,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 126,
                lessonId: 6,
                type: 'SELCT',
                order: 1,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 127,
                lessonId: 6,
                type: 'SELCT',
                order: 1,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 128,
                lessonId: 6,
                type: 'SELCT',
                order: 1,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 129,
                lessonId: 6,
                type: 'SELCT',
                order: 1,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 130,
                lessonId: 6,
                type: 'SELCT',
                order: 1,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 131,
                lessonId: 6,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 132,
                lessonId: 6,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 133,
                lessonId: 6,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 134,
                lessonId: 6,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 135,
                lessonId: 6,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 136,
                lessonId: 6,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 137,
                lessonId: 6,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 138,
                lessonId: 6,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 139,
                lessonId: 6,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 140,
                lessonId: 6,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 141,
                lessonId: 6,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 142,
                lessonId: 6,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 143,
                lessonId: 6,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 144,
                lessonId: 6,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 145,
                lessonId: 6,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 146,
                lessonId: 6,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 147,
                lessonId: 6,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 148,
                lessonId: 6,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 149,
                lessonId: 6,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 150,
                lessonId: 6,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 151,
                lessonId: 7,
                type: 'SELCT',
                order: 1,
                question: '(UNIFESP-ADAPTADA) A Massa da Terra é aproximadamente 80 vezes a massa da Lua e a distância entre os centros de massa desses astros é aproximadamente 60 vezes o raio da Terra. A respeito do sistema Terra-Lua pode-se afirmar que:',
                imageSrc: null,
                comment: 'O centro de massa é um ponto que se comporta como se toda a massa do sistema estivesse concentrada nele. Como a massa da Terra é muito maior que a massa da Lua, o centro de massa do sistema Terra-Lua deve ser um ponto localizado na Terra.'
            },
            {
                id: 152,
                lessonId: 7,
                type: 'SELCT',
                order: 1,
                question: 'Um satélite artificial S descreve uma órbita elíptica em torno da Terra, sendo que a Terra está no foco, conforme a figura adiante. Indique a alternativa correta:',
                imageSrc: 'Satelite S',
                comment: null
            },
            {
                id: 153,
                lessonId: 7,
                type: 'SELCT',
                order: 1,
                question: 'A figura a seguir representa a órbita elíptica de um cometa em torno do sol. Com relação aos módulos das velocidades desse cometa nos pontos I e J, vi e vj, e aos módulos das acelerações nesses mesmos pontos, ai e aj, pode-se afirmar que:',
                imageSrc: 'Cometa sol',
                comment: null
            },
            {
                id: 154,
                lessonId: 7,
                type: 'SELCT',
                order: 2,
                question: 'Se R é o raio médio da órbita de um planeta X, e T é o período de revolução em torno do Sol, a 3º lei de Kepler estabelece que T² = k.R³, onde k é uma constante de proporcionalidade, válida para todos os planetas de nosso sistema solar. Suponha que a distância média do planeta X ao Sol é 4 vezes a distância média da Terra ao Sol. Podemos concluir que o período do planeta X é, em anos:',
                imageSrc: null,
                comment: null
            },
            {
                id: 155,
                lessonId: 7,
                type: 'SELCT',
                order: 2,
                question: 'Se o planeta A está duas vezes mais distante do Sol do que o planeta B, qual será aproximadamente o período orbital de A em relação a B?',
                imageSrc: null,
                comment: null
            },
            {
                id: 156,
                lessonId: 7,
                type: 'SELCT',
                order: 2,
                question: 'Se um planeta tem um período orbital de 8 anos, qual é a distância média ao Sol, de acordo com a Terceira Lei de Kepler?',
                imageSrc: null,
                comment: null
            },
            {
                id: 157,
                lessonId: 7,
                type: 'SELCT',
                order: 3,
                question: 'Para dois planetas em torno de uma estrela, se o planeta X está a 4 unidades astronômicas e o planeta Y a 8 unidades astronômicas, o período orbital de Y será aproximadamente:',
                imageSrc: null,
                comment: 'De acordo com a Terceira Lei de Kepler, o quadrado do período orbital T² é proporcional ao cubo da distância média r³. Para o planeta X, rX = 4 UA e, para o planeta Y, rY = 8 UA. Como T² ∝ r³, o período do planeta Y será maior que o dobro do período de X, porque (8/4)³/² ≈ 2,83. Ou seja, o período de Y será aproximadamente 2,83 vezes o de X.'
            },
            {
                id: 158,
                lessonId: 7,
                type: 'SELCT',
                order: 3,
                question: 'Se um planeta leva 27 anos para completar uma órbita ao redor de sua estrela, qual seria sua distância média em unidades astronômicas?',
                imageSrc: null,
                comment: ''
            },
            {
                id: 159,
                lessonId: 7,
                type: 'SELCT',
                order: 3,
                question: 'Se um satélite está a 20.000 km de altura e outro está a 10.000 km de altura, o satélite mais distante:',
                imageSrc: null,
                comment: 'O satélite mais distante da Terra leva mais tempo para completar uma órbita, de acordo com a Terceira Lei de Kepler, pois a distância maior implica um período orbital maior.'
            },
            {
                id: 160,
                lessonId: 7,
                type: 'SELCT',
                order: 4,
                question: 'Se o período orbital de um satélite for duplicado, a distância média entre o satélite e o planeta deve ser:',
                imageSrc: null,
                comment: 'De acordo com a Terceira Lei de Kepler, T² = r³. Para duplicar o período, a distância deve ser aumentada por um fator de aproximadamente 1,587 (raiz cúbica de 2), o que leva a um aumento de cerca de 2,52 vezes.'
            },
            {
                id: 161,
                lessonId: 7,
                type: 'SELCT',
                order: 4,
                question: 'Um satélite orbita a 42.000 km do centro da Terra, enquanto outro orbita a 21.000 km. De acordo com a Terceira Lei de Kepler, o período orbital do satélite mais distante é:',
                imageSrc: null,
                comment: 'Como a distância é o dobro (42.000 km contra 21.000 km), pela Terceira Lei de Kepler, o período aumenta por um fator de 2^(3/2) ≈ 2,828, o que resulta em um período aproximadamente quatro vezes maior.'
            },
            {
                id: 162,
                lessonId: 7,
                type: 'SELCT',
                order: 4,
                question: 'Seja F o módulo da força de atração da Terra sobre a Lua e V³ o módulo da velocidade tangencial da Lua em sua órbita, considerada circular, em torno da Terra. Se a massa da Terra se tornasse três vezes maior, a Lua quatro vezes menor e a distância entre estes dois astros se reduzisse à metade, a força de atração entre a Terra e a Lua passaria a ser:',
                imageSrc: null,
                comment: null
            },
            {
                id: 163,
                lessonId: 7,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 164,
                lessonId: 7,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 165,
                lessonId: 7,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 166,
                lessonId: 8,
                type: 'SELCT',
                order: 1,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 167,
                lessonId: 8,
                type: 'SELCT',
                order: 1,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 168,
                lessonId: 8,
                type: 'SELCT',
                order: 1,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 169,
                lessonId: 8,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 170,
                lessonId: 8,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 171,
                lessonId: 8,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 172,
                lessonId: 8,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 173,
                lessonId: 8,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 174,
                lessonId: 8,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 175,
                lessonId: 8,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 176,
                lessonId: 8,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 177,
                lessonId: 8,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 178,
                lessonId: 8,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 179,
                lessonId: 8,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 180,
                lessonId: 8,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 181,
                lessonId: 9,
                type: 'SELCT',
                order: 1,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 182,
                lessonId: 9,
                type: 'SELCT',
                order: 1,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 183,
                lessonId: 9,
                type: 'SELCT',
                order: 1,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 184,
                lessonId: 9,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 185,
                lessonId: 9,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 186,
                lessonId: 9,
                type: 'SELCT',
                order: 2,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 187,
                lessonId: 9,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 188,
                lessonId: 9,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 189,
                lessonId: 9,
                type: 'SELCT',
                order: 3,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 190,
                lessonId: 9,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 191,
                lessonId: 9,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 192,
                lessonId: 9,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 193,
                lessonId: 9,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 194,
                lessonId: 9,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            },
            {
                id: 195,
                lessonId: 9,
                type: 'SELCT',
                order: 5,
                question: '',
                imageSrc: null,
                comment: null
            }
            
        ]);
        
//.....................................................
        //question 1
        await db.insert(schema.questionOptions).values([
            {
                id: 1,
                questionId: 1,
                correct: false,
                text: 'A energia total em um sistema isolado permanece constante',
                imageSrc: null
            },
            {
                id: 2,
                questionId: 1,
                correct: false,
                text: 'A força necessária para mover um objeto é proporcional à sua aceleração.',
                imageSrc: null
            }
        ]);

        //question 2
        await db.insert(schema.questionOptions).values([
            {
                questionId: 2,
                correct: false,
                text: ' No ponto mais baixo do movimento.',
            },
            {
                questionId: 2,
                correct: true,
                text: 'No ponto mais alto do movimento.',
            },
            {
                questionId: 2,
                correct: false,
                text: 'No ponto médio do movimento.',
            }
        ]);

        //question 3
        await db.insert(schema.questionOptions).values([
            {
                questionId: 3,
                correct: false,
                text: 'Apenas o momento linear.',
            },
            {
                questionId: 3,
                correct: true,
                text: 'O momento linear e a energia cinética.',
            },
            {
                questionId: 3,
                correct: false,
                text: 'Apenas a energia potencial.',
            }
        ]);
        

        // outro
        await db.insert(schema.questions).values([
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