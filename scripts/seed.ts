import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";
import { log } from "console";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
    try {
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
                ImageSrc: '/SolarSystem1.svg' //null
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
                title: 'Unidade 2',
                Description: 'Astronomia',
                order: 1
            },
            {
                id: 2,
                courseId: 1, // espanhool
                title: 'Unidade 2',
                Description: 'Astronomia 2',
                order: 2
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
                id: 67,
                lessonId: 3,
                type: 'SELCT',
                order: 4,
                question: '',
                imageSrc: null,
                comment: ''},
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
        //questions
        await db.insert(schema.questionOptions).values([
            { id: 1, questionId: 1, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 2, questionId: 1, correct: true, text: 'Falso', imageSrc: null },
            { id: 3, questionId: 2, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 4, questionId: 2, correct: false, text: 'Falso', imageSrc: null },
            { id: 5, questionId: 3, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 6, questionId: 3, correct: true, text: 'Falso', imageSrc: null },
            { id: 7, questionId: 4, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 8, questionId: 4, correct: true, text: 'Falso', imageSrc: null },
            { id: 9, questionId: 5, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 10, questionId: 5, correct: true, text: 'Falso', imageSrc: null },
            { id: 11, questionId: 6, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 12, questionId: 6, correct: false, text: 'Falso', imageSrc: null },
            { id: 13, questionId: 7, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 14, questionId: 7, correct: true, text: 'Falso', imageSrc: null },
            { id: 15, questionId: 8, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 16, questionId: 8, correct: true, text: 'Falso', imageSrc: null },
            { id: 17, questionId: 9, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 18, questionId: 9, correct: true, text: 'Falso', imageSrc: null },
            { id: 19, questionId: 10, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 20, questionId: 10, correct: true, text: 'Falso', imageSrc: null },
            { id: 21, questionId: 11, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 22, questionId: 11, correct: true, text: 'Falso', imageSrc: null },
            { id: 23, questionId: 12, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 24, questionId: 12, correct: true, text: 'Falso', imageSrc: null },
            { id: 25, questionId: 13, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 26, questionId: 13, correct: false, text: 'Falso', imageSrc: null },
            { id: 27, questionId: 14, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 28, questionId: 14, correct: false, text: 'Falso', imageSrc: null },
            { id: 29, questionId: 15, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 30, questionId: 15, correct: true, text: 'Falso', imageSrc: null },
            { id: 31, questionId: 16, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 32, questionId: 16, correct: true, text: 'Falso', imageSrc: null },
            { id: 33, questionId: 17, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 34, questionId: 17, correct: false, text: 'Falso', imageSrc: null },
            { id: 35, questionId: 18, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 36, questionId: 18, correct: false, text: 'Falso', imageSrc: null },
            { id: 37, questionId: 19, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 38, questionId: 19, correct: true, text: 'Falso', imageSrc: null },
            { id: 39, questionId: 20, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 40, questionId: 20, correct: true, text: 'Falso', imageSrc: null },
            { id: 41, questionId: 21, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 42, questionId: 21, correct: true, text: 'Falso', imageSrc: null },
            { id: 43, questionId: 22, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 44, questionId: 22, correct: false, text: 'Falso', imageSrc: null },
            { id: 45, questionId: 23, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 46, questionId: 23, correct: false, text: 'Falso', imageSrc: null },
            { id: 47, questionId: 24, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 48, questionId: 24, correct: false, text: 'Falso', imageSrc: null },
            { id: 49, questionId: 25, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 50, questionId: 25, correct: true, text: 'Falso', imageSrc: null },
            { id: 51, questionId: 26, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 52, questionId: 26, correct: false, text: 'Falso', imageSrc: null },
            { id: 53, questionId: 27, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 54, questionId: 27, correct: false, text: 'Falso', imageSrc: null },
            { id: 55, questionId: 28, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 56, questionId: 28, correct: true, text: 'Falso', imageSrc: null },
            { id: 57, questionId: 29, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 58, questionId: 29, correct: true, text: 'Falso', imageSrc: null },
            { id: 59, questionId: 30, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 60, questionId: 30, correct: false, text: 'Falso', imageSrc: null },
            { id: 61, questionId: 31, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 62, questionId: 31, correct: false, text: 'Falso', imageSrc: null },
            { id: 63, questionId: 32, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 64, questionId: 32, correct: false, text: 'Falso', imageSrc: null },
            { id: 65, questionId: 33, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 66, questionId: 33, correct: false, text: 'Falso', imageSrc: null },
            { id: 67, questionId: 34, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 68, questionId: 34, correct: true, text: 'Falso', imageSrc: null },
            { id: 69, questionId: 35, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 70, questionId: 35, correct: true, text: 'Falso', imageSrc: null },
            { id: 71, questionId: 36, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 72, questionId: 36, correct: false, text: 'Falso', imageSrc: null },
            { id: 73, questionId: 37, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 74, questionId: 37, correct: false, text: 'Falso', imageSrc: null },
            { id: 75, questionId: 38, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 76, questionId: 38, correct: true, text: 'Falso', imageSrc: null },
            { id: 77, questionId: 39, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 78, questionId: 39, correct: true, text: 'Falso', imageSrc: null },
            { id: 79, questionId: 40, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 80, questionId: 40, correct: true, text: 'Falso', imageSrc: null },
            { id: 81, questionId: 41, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 82, questionId: 41, correct: true, text: 'Falso', imageSrc: null },
            { id: 83, questionId: 42, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 84, questionId: 42, correct: true, text: 'Falso', imageSrc: null },
            { id: 85, questionId: 43, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 86, questionId: 43, correct: false, text: 'Falso', imageSrc: null },
            { id: 87, questionId: 44, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 88, questionId: 44, correct: true, text: 'Falso', imageSrc: null },
            { id: 89, questionId: 45, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 90, questionId: 45, correct: false, text: 'Falso', imageSrc: null },
            { id: 91, questionId: 46, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 92, questionId: 46, correct: false, text: 'Falso', imageSrc: null },
            { id: 93, questionId: 47, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 94, questionId: 47, correct: true, text: 'Falso', imageSrc: null },
            { id: 95, questionId: 48, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 96, questionId: 48, correct: false, text: 'Falso', imageSrc: null },
            { id: 97, questionId: 49, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 98, questionId: 49, correct: false, text: 'Falso', imageSrc: null },
            { id: 99, questionId: 50, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 100, questionId: 50, correct: false, text: 'Falso', imageSrc: null },
            { id: 101, questionId: 51, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 102, questionId: 51, correct: true, text: 'Falso', imageSrc: null },
            { id: 103, questionId: 52, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 104, questionId: 52, correct: false, text: 'Falso', imageSrc: null },
            { id: 105, questionId: 53, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 106, questionId: 53, correct: true, text: 'Falso', imageSrc: null },
            { id: 107, questionId: 54, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 108, questionId: 54, correct: false, text: 'Falso', imageSrc: null },
            { id: 109, questionId: 55, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 110, questionId: 55, correct: true, text: 'Falso', imageSrc: null },
            { id: 111, questionId: 56, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 112, questionId: 56, correct: false, text: 'Falso', imageSrc: null },
            { id: 113, questionId: 57, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 114, questionId: 57, correct: true, text: 'Falso', imageSrc: null },
            { id: 115, questionId: 58, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 116, questionId: 58, correct: false, text: 'Falso', imageSrc: null },
            { id: 117, questionId: 59, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 118, questionId: 59, correct: true, text: 'Falso', imageSrc: null },
            { id: 119, questionId: 60, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 120, questionId: 60, correct: true, text: 'Falso', imageSrc: null },
            { id: 121, questionId: 61, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 122, questionId: 61, correct: false, text: 'Falso', imageSrc: null },
            { id: 123, questionId: 62, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 124, questionId: 62, correct: false, text: 'Falso', imageSrc: null },
            { id: 125, questionId: 63, correct: true, text: 'Verdadeiro', imageSrc: null },
            { id: 126, questionId: 63, correct: false, text: 'Falso', imageSrc: null },
            { id: 127, questionId: 64, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 128, questionId: 64, correct: true, text: 'Falso', imageSrc: 'Explicação T' },
            { id: 129, questionId: 65, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 130, questionId: 65, correct: true, text: 'Falso', imageSrc: null },
            { id: 131, questionId: 66, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 132, questionId: 66, correct: true, text: 'Falso', imageSrc: null },
            { id: 133, questionId: 67, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 134, questionId: 67, correct: true, text: 'Falso', imageSrc: null },
            { id: 135, questionId: 68, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 136, questionId: 68, correct: true, text: 'Falso', imageSrc: null },
            { id: 137, questionId: 69, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 138, questionId: 69, correct: true, text: 'Falso', imageSrc: null },
            { id: 139, questionId: 70, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 140, questionId: 70, correct: true, text: 'Falso', imageSrc: null },
            { id: 141, questionId: 71, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 142, questionId: 71, correct: true, text: 'Falso', imageSrc: null },
            { id: 143, questionId: 72, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 144, questionId: 72, correct: true, text: 'Falso', imageSrc: null },
            { id: 145, questionId: 73, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 146, questionId: 73, correct: true, text: 'Falso', imageSrc: null },
            { id: 147, questionId: 74, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 148, questionId: 74, correct: true, text: 'Falso', imageSrc: null },
            { id: 149, questionId: 75, correct: false, text: 'Verdadeiro', imageSrc: null },
            { id: 150, questionId: 75, correct: true, text: 'Falso', imageSrc: null },
            { id: 151, questionId: 76, correct: false, text: 'lei da gravitação universal, lei das áreas e lei dos períodos.', imageSrc: null },
            { id: 152, questionId: 76, correct: true, text: 'lei das órbitas elípticas, lei das áreas e lei dos períodos.', imageSrc: null },
            { id: 153, questionId: 76, correct: false, text: 'lei das órbitas elípticas, lei das áreas e lei da gravitação universal.', imageSrc: null },
            { id: 154, questionId: 76, correct: true, text: 'lei das órbitas elípticas, lei da gravitação universal e lei dos períodos.', imageSrc: null },
            { id: 155, questionId: 77, correct: false, text: 'a primeira lei, do formato das órbitas.', imageSrc: null },
            { id: 156, questionId: 77, correct: false, text: 'a segunda lei, das velocidades orbitais.', imageSrc: null },
            { id: 157, questionId: 77, correct: true, text: 'a terceira lei, das distâncias planetárias.', imageSrc: null },
            { id: 158, questionId: 77, correct: false, text: 'a quarta lei, da tendência inercial.', imageSrc: null },
            { id: 159, questionId: 78, correct: false, text: 'A excentricidade da órbita de Mercúrio e de Vênus são semelhantes.', imageSrc: null },
            { id: 160, questionId: 78, correct: false, text: 'A excentricidade da órbita de Mercúrio é menor do que a de Marte.', imageSrc: null },
            { id: 161, questionId: 78, correct: true, text: 'A excentricidade da órbita de Vênus é menor do que a da Terra.', imageSrc: null },
            { id: 162, questionId: 78, correct: false, text: 'A excentricidade da órbita de Marte é maior do que a da Terra.', imageSrc: null },
            { id: 163, questionId: 79, correct: false, text: 'Netuno e Terra', imageSrc: null },
            { id: 164, questionId: 79, correct: true, text: 'Mercúrio e Marte', imageSrc: null },
            { id: 165, questionId: 79, correct: false, text: 'Júpter e Urano', imageSrc: null },
            { id: 166, questionId: 79, correct: false, text: 'Marte e Netuno', imageSrc: null },
            { id: 167, questionId: 79, correct: false, text: 'Vênus​​ leva​​ mais tempo​​ para​​ dar uma volta completa em torno do​​ Sol​​ do que a​​ Terra.', imageSrc: null },
            { id: 168, questionId: 79, correct: false, text: 'a​​ ordem crescente de afastamento​​ desses planetas em​​ relação ao Sol é:​​ Marte, Terra, Vênus e Mercúrio.', imageSrc: null },
            { id: 169, questionId: 79, correct: false, text: 'Marte​​ é o planeta que demora​​ menos tempo​​ para dar​​ uma volta completa em torno de Sol.', imageSrc: null },
            { id: 170, questionId: 79, correct: true, text: 'Mercúrio​​ leva​​ menos de um ano​​ para dar​​ uma volta completa em torno do Sol.', imageSrc: null },
            { id: 171, questionId: 80, correct: false, text: 'Vênus​​ leva​​ mais tempo​​ para​​ dar uma volta completa em torno do​​ Sol​​ do que a​​ Terra.', imageSrc: null },
            { id: 172, questionId: 80, correct: false, text: 'a​​ ordem crescente de afastamento​​ desses planetas em​​ relação ao Sol é:​​ Marte, Terra, Vênus e Mercúrio.', imageSrc: null },
            { id: 173, questionId: 80, correct: false, text: 'Marte​​ é o planeta que demora​​ menos tempo​​ para dar​​ uma volta completa em torno de Sol.', imageSrc: null },
            { id: 174, questionId: 80, correct: true, text: 'Mercúrio​​ leva​​ menos de um ano​​ para dar​​ uma volta completa em torno do Sol.', imageSrc: null },
            { id: 175, questionId: 81, correct: true, text: 'Netuno e Terra', imageSrc: null },
            { id: 176, questionId: 81, correct: false, text: 'Mercúrio e Marte', imageSrc: null },
            { id: 177, questionId: 81, correct: false, text: 'Júpter e Urano', imageSrc: null },
            { id: 178, questionId: 81, correct: false, text: 'Marte e Netuno', imageSrc: null },
            { id: 179, questionId: 82, correct: false, text: 'A órbita dos planetas é circular ao redor do Sol.', imageSrc: null },
            { id: 180, questionId: 82, correct: false, text: 'A velocidade dos planetas é constante em toda a órbita.', imageSrc: null },
            { id: 181, questionId: 82, correct: true, text: 'O quadrado do período orbital de um planeta é proporcional ao cubo da distância média ao Sol.', imageSrc: null },
            { id: 182, questionId: 82, correct: false, text: 'Todos os planetas têm o mesmo período orbital.', imageSrc: null },
            { id: 183, questionId: 83, correct: false, text: 'Planetas mais distantes do Sol têm períodos orbitais menores.', imageSrc: null },
            { id: 184, questionId: 83, correct: false, text: 'Planetas mais próximos do Sol têm períodos orbitais maiores.', imageSrc: null },
            { id: 185, questionId: 83, correct: true, text: 'Planetas mais distantes do Sol têm períodos orbitais maiores.', imageSrc: null },
            { id: 186, questionId: 83, correct: false, text: 'Planetas com maior massa têm períodos orbitais menores.', imageSrc: null },
            { id: 187, questionId: 84, correct: true, text: 'Anos e unidades astronômicas (UA).', imageSrc: null },
            { id: 188, questionId: 84, correct: false, text: 'Segundos e metros.', imageSrc: null },
            { id: 189, questionId: 84, correct: false, text: 'Horas e quilômetros.', imageSrc: null },
            { id: 190, questionId: 84, correct: false, text: 'Meses e milhas.', imageSrc: null },
            { id: 191, questionId: 85, correct: false, text: 'Maior será a sua velocidade orbital.', imageSrc: null },
            { id: 192, questionId: 85, correct: true, text: 'Maior será o seu período orbital.', imageSrc: null },
            { id: 193, questionId: 85, correct: false, text: 'Menor será o seu período orbital.', imageSrc: null },
            { id: 194, questionId: 85, correct: false, text: 'Menor será a força gravitacional exercida sobre ele pelo Sol.', imageSrc: null },
            { id: 195, questionId: 86, correct: false, text: 'O planeta Mercúrio, mais próximo do Sol, tem um período orbital maior que Netuno.', imageSrc: null },
            { id: 196, questionId: 86, correct: false, text: 'O quadrado do período orbital da Terra é menor que o quadrado do período de Júpiter, mas a distância média da Terra ao Sol é maior que a de Júpiter.', imageSrc: null },
            { id: 197, questionId: 86, correct: true, text: 'Marte, sendo mais distante do Sol que a Terra, leva mais tempo para completar uma órbita.', imageSrc: null },
            { id: 198, questionId: 86, correct: false, text: 'Todos os planetas do Sistema Solar têm o mesmo período orbital.', imageSrc: null },
            { id: 199, questionId: 87, correct: true, text: 'Maior.', imageSrc: null },
            { id: 200, questionId: 87, correct: false, text: 'Menor.', imageSrc: null },
            { id: 201, questionId: 87, correct: false, text: 'O mesmo.', imageSrc: null },
            { id: 202, questionId: 87, correct: false, text: 'Inversamente proporcional à sua distância.', imageSrc: null },
            { id: 203, questionId: 88, correct: false, text: 'Todos os satélites têm o mesmo período orbital, independentemente da sua distância ao planeta.', imageSrc: null },
            { id: 204, questionId: 88, correct: false, text: 'Satélites mais próximos têm períodos orbitais maiores.', imageSrc: null },
            { id: 205, questionId: 88, correct: true, text: 'O quadrado do período orbital é proporcional ao cubo da distância média do satélite ao planeta.', imageSrc: null },
            { id: 206, questionId: 88, correct: false, text: 'Satélites mais distantes orbitam mais rapidamente.', imageSrc: null },
            { id: 207, questionId: 89, correct: false, text: 'O satélite mais próximo ao planeta tem um período maior.', imageSrc: null },
            { id: 208, questionId: 89, correct: true, text: 'O satélite mais distante leva mais tempo para completar uma órbita.', imageSrc: null },
            { id: 209, questionId: 89, correct: false, text: 'Ambos os satélites têm o mesmo período orbital.', imageSrc: null },
            { id: 210, questionId: 89, correct: false, text: 'O satélite mais distante tem a velocidade orbital mais alta.', imageSrc: null },
            { id: 211, questionId: 90, correct: false, text: 'Diminui.', imageSrc: null },
            { id: 212, questionId: 90, correct: false, text: 'Permanece o mesmo.', imageSrc: null },
            { id: 213, questionId: 90, correct: true, text: 'Aumenta.', imageSrc: null },
            { id: 214, questionId: 90, correct: false, text: 'Torna-se diretamente proporcional à sua massa.', imageSrc: null },
            { id: 215, questionId: 91, correct: false, text: '1 hora.', imageSrc: null },
            { id: 216, questionId: 91, correct: true, text: '24 horas.', imageSrc: null },
            { id: 217, questionId: 91, correct: false, text: '12 horas.', imageSrc: null },
            { id: 218, questionId: 91, correct: false, text: '30 dias.', imageSrc: null },
            { id: 219, questionId: 92, correct: false, text: 'O período orbital é diretamente proporcional à distância.', imageSrc: null },
            { id: 220, questionId: 92, correct: false, text: 'O período orbital é inversamente proporcional à distância.', imageSrc: null },
            { id: 221, questionId: 92, correct: true, text: 'O período orbital cresce conforme a distância aumenta.', imageSrc: null },
            { id: 222, questionId: 92, correct: false, text: 'A distância não afeta o período orbital.', imageSrc: null },
            { id: 223, questionId: 93, correct: false, text: 'Descreve como a força gravitacional afeta a aceleração dos satélites.', imageSrc: null },
            { id: 224, questionId: 93, correct: true, text: 'Relaciona o período orbital com a distância média do satélite ao centro da Terra.', imageSrc: null },
            { id: 225, questionId: 93, correct: false, text: 'Determina que todos os satélites orbitam a mesma distância.', imageSrc: null },
            { id: 226, questionId: 93, correct: false, text: 'As órbitas dos satélites são circulares.', imageSrc: null },
            { id: 227, questionId: 94, correct: false, text: 'O aumento visual​​ no tamanho da Lua ocorre pelo aumento de seu brilho​​ gerado quando​​ nosso satélite​​ se encontra na fase de lua cheia.', imageSrc: null },
            { id: 228, questionId: 94, correct: false, text: 'A Terra​​ se encontra no​​ ponto mais próximo do Sol,​​ o que aproxima mais a Lua da Terra devido ao​​ aumento dos efeitos gravitacionais do Sol.', imageSrc: null },
            { id: 229, questionId: 94, correct: false, text: 'No​​ perigeu da órbita lunar, a coluna de ar entre a Terra e a Lua diminui; assim,​​ a atmosfera proporciona um efeito de​​ ampliação visual por refração.', imageSrc: null },
            { id: 230, questionId: 94, correct: true, text: 'A trajetória lunar​​ não é circular, de forma que ao atingir o ponto mais próximo da Terra​​ temos apenas um​​ aumento aparente devido à proximidade', imageSrc: null },
            { id: 231, questionId: 95, correct: false, text: 'translação da Lua​​ ao redor da Terra está diminuindo.', imageSrc: null },
            { id: 232, questionId: 95, correct: true, text: 'translação da Lua​​ ao redor da Terra está aumentando.', imageSrc: null },
            { id: 233, questionId: 95, correct: false, text: 'translação da Lua​​ ao redor da Terra não se altera.', imageSrc: null },
            { id: 234, questionId: 95, correct: false, text: 'rotação da Lua​​ está diminuindo.', imageSrc: null },
            { id: 235, questionId: 96, correct: false, text: 'módulo​​ da​​ velocidade​​ de um planeta em​​ órbita elíptica​​ é constante.', imageSrc: null },
            { id: 236, questionId: 96, correct: true, text: 'Sol​​ se situa em um dos​​ focos da trajetória elíptica​​ descrita por um planeta.', imageSrc: null },
            { id: 237, questionId: 96, correct: false, text: 'período de translação​​ e a​​ massa​​ de um planeta se​​ relacionam através de uma proporção direta.', imageSrc: null },
            { id: 238, questionId: 96, correct: false, text: 'período de rotação​​ de um planeta, em​​ torno de seu eixo, e seu o​​ período de translação​​ em torno do Sol​​ são diretamente proporcionais.', imageSrc: null },
            { id: 239, questionId: 97, correct: false, text: 'Os planetas se movem em órbitas circulares ao redor do Sol.', imageSrc: null },
            { id: 240, questionId: 97, correct: true, text: 'A linha que liga um planeta ao Sol varre áreas iguais em tempos iguais.', imageSrc: null },
            { id: 241, questionId: 97, correct: false, text: 'A órbita dos planetas é uma elipse, com o Sol em um dos focos.', imageSrc: null },
            { id: 242, questionId: 97, correct: false, text: 'O quadrado do período orbital de um planeta é proporcional ao cubo da distância média ao Sol', imageSrc: null },
            { id: 243, questionId: 98, correct: false, text: 'A velocidade é constante ao longo da órbita.', imageSrc: null },
            { id: 244, questionId: 98, correct: true, text: 'A velocidade é maior quando o planeta está mais próximo do Sol.', imageSrc: null },
            { id: 245, questionId: 98, correct: false, text: 'A velocidade é menor quando o planeta está mais próximo do Sol.', imageSrc: null },
            { id: 246, questionId: 98, correct: false, text: 'A velocidade não depende da posição do planeta em relação ao Sol.', imageSrc: null },
            { id: 247, questionId: 99, correct: false, text: 'Quando está mais próximo do afélio.', imageSrc: null },
            { id: 248, questionId: 99, correct: false, text: 'Quando está a uma distância constante do Sol.', imageSrc: null },
            { id: 249, questionId: 99, correct: true, text: 'Quando está mais próximo do periélio.', imageSrc: null },
            { id: 250, questionId: 99, correct: false, text: 'Quando a órbita é circular.', imageSrc: null },
            { id: 251, questionId: 100, correct: false, text: 'Perto do afélio.', imageSrc: null },
            { id: 252, questionId: 100, correct: true, text: 'Perto do periélio.', imageSrc: null },
            { id: 253, questionId: 100, correct: false, text: 'No ponto médio entre o afélio e o periélio.', imageSrc: null },
            { id: 254, questionId: 100, correct: false, text: 'Ele terá a mesma velocidade em qualquer ponto da órbita.', imageSrc: null },
            { id: 255, questionId: 101, correct: false, text: 'A velocidade é constante.', imageSrc: null },
            { id: 256, questionId: 101, correct: false, text: 'A velocidade aumenta à medida que o planeta se aproxima do afélio.', imageSrc: null },
            { id: 257, questionId: 101, correct: true, text: 'A velocidade aumenta à medida que o planeta se aproxima do periélio.', imageSrc: null },
            { id: 258, questionId: 101, correct: false, text: 'A velocidade diminui à medida que o planeta se aproxima do periélio.', imageSrc: null },
            { id: 259, questionId: 102, correct: true, text: 'Porque a distância do planeta ao Sol muda.', imageSrc: null },
            { id: 260, questionId: 102, correct: false, text: 'Porque a massa do planeta muda ao longo da órbita.', imageSrc: null },
            { id: 261, questionId: 102, correct: false, text: 'Porque o Sol se move no espaço.', imageSrc: null },
            { id: 262, questionId: 102, correct: false, text: 'Porque a gravidade é mais forte no afélio do que no periélio.', imageSrc: null },
            { id: 263, questionId: 103, correct: false, text: 'Está mais distante da estrela.', imageSrc: null },
            { id: 264, questionId: 103, correct: true, text: 'Está mais próximo da estrela.', imageSrc: null },
            { id: 265, questionId: 103, correct: false, text: 'Está se movendo ao longo de uma linha reta.', imageSrc: null },
            { id: 266, questionId: 103, correct: false, text: 'A sua órbita é circular.', imageSrc: null },
            { id: 267, questionId: 104, correct: false, text: 'A velocidade orbital de um planeta é constante ao longo de toda sua órbita.', imageSrc: null },
            { id: 268, questionId: 104, correct: false, text: 'A linha que conecta um planeta ao Sol varre áreas iguais em tempos diferentes.', imageSrc: null },
            { id: 269, questionId: 104, correct: true, text: 'A linha que conecta um planeta ao Sol varre áreas iguais em tempos iguais.', imageSrc: null },
            { id: 270, questionId: 104, correct: false, text: 'O tempo que um planeta leva para orbitar o Sol é proporcional à distância ao Sol.', imageSrc: null },
            { id: 271, questionId: 105, correct: false, text: 'Ela aumenta conforme o planeta se aproxima do afélio.', imageSrc: null },
            { id: 272, questionId: 105, correct: false, text: 'Ela diminui conforme o planeta se aproxima do periélio.', imageSrc: null },
            { id: 273, questionId: 105, correct: true, text: 'Ela é sempre constante.', imageSrc: null },
            { id: 274, questionId: 105, correct: false, text: 'Ela varia de acordo com a massa do planeta.', imageSrc: null },
            { id: 275, questionId: 106, correct: false, text: 'Porque ela explica que todos os planetas têm a mesma velocidade orbital.', imageSrc: null },
            { id: 276, questionId: 106, correct: false, text: 'Porque ela mostra que a órbita dos planetas é perfeitamente circular.', imageSrc: null },
            { id: 277, questionId: 106, correct: true, text: 'Porque ela revela como a velocidade dos planetas varia dependendo da sua distância ao Sol.', imageSrc: null },
            { id: 278, questionId: 106, correct: false, text: 'Porque ela prevê o tempo que um planeta leva para completar uma órbita.', imageSrc: null },
            { id: 279, questionId: 107, correct: false, text: '', imageSrc: null },
            { id: 280, questionId: 107, correct: false, text: '', imageSrc: null },
            { id: 281, questionId: 107, correct: true, text: '', imageSrc: null },
            { id: 282, questionId: 107, correct: false, text: '', imageSrc: null },
            { id: 283, questionId: 108, correct: false, text: '', imageSrc: null },
            { id: 284, questionId: 108, correct: false, text: '', imageSrc: null },
            { id: 285, questionId: 108, correct: true, text: '', imageSrc: null },
            { id: 286, questionId: 108, correct: false, text: '', imageSrc: null },
            { id: 287, questionId: 109, correct: false, text: '', imageSrc: null },
            { id: 288, questionId: 109, correct: false, text: '', imageSrc: null },
            { id: 289, questionId: 109, correct: true, text: '', imageSrc: null },
            { id: 290, questionId: 109, correct: false, text: '', imageSrc: null },
            { id: 291, questionId: 110, correct: false, text: '', imageSrc: null },
            { id: 292, questionId: 110, correct: false, text: '', imageSrc: null },
            { id: 293, questionId: 110, correct: true, text: '', imageSrc: null },
            { id: 294, questionId: 110, correct: false, text: '', imageSrc: null },
            { id: 295, questionId: 111, correct: false, text: '', imageSrc: null },
            { id: 296, questionId: 111, correct: false, text: '', imageSrc: null },
            { id: 297, questionId: 111, correct: true, text: '', imageSrc: null },
            { id: 298, questionId: 111, correct: false, text: '', imageSrc: null },
            { id: 299, questionId: 112, correct: false, text: '', imageSrc: null },
            { id: 300, questionId: 112, correct: false, text: '', imageSrc: null },
            { id: 301, questionId: 112, correct: true, text: '', imageSrc: null },
            { id: 302, questionId: 112, correct: false, text: '', imageSrc: null },
            { id: 303, questionId: 113, correct: false, text: '', imageSrc: null },
            { id: 304, questionId: 113, correct: false, text: '', imageSrc: null },
            { id: 305, questionId: 113, correct: true, text: '', imageSrc: null },
            { id: 306, questionId: 113, correct: false, text: '', imageSrc: null },
            { id: 307, questionId: 114, correct: false, text: '', imageSrc: null },
            { id: 308, questionId: 114, correct: false, text: '', imageSrc: null },
            { id: 309, questionId: 114, correct: true, text: '', imageSrc: null },
            { id: 310, questionId: 114, correct: false, text: '', imageSrc: null },
            { id: 311, questionId: 115, correct: false, text: '', imageSrc: null },
            { id: 312, questionId: 115, correct: false, text: '', imageSrc: null },
            { id: 313, questionId: 115, correct: true, text: '', imageSrc: null },
            { id: 314, questionId: 115, correct: false, text: '', imageSrc: null },
            { id: 315, questionId: 116, correct: false, text: '', imageSrc: null },
            { id: 316, questionId: 116, correct: false, text: '', imageSrc: null },
            { id: 317, questionId: 116, correct: true, text: '', imageSrc: null },
            { id: 318, questionId: 116, correct: false, text: '', imageSrc: null },
            { id: 319, questionId: 117, correct: false, text: '', imageSrc: null },
            { id: 320, questionId: 117, correct: false, text: '', imageSrc: null },
            { id: 321, questionId: 117, correct: true, text: '', imageSrc: null },
            { id: 322, questionId: 117, correct: false, text: '', imageSrc: null },
            { id: 323, questionId: 118, correct: false, text: '', imageSrc: null },
            { id: 324, questionId: 118, correct: false, text: '', imageSrc: null },
            { id: 325, questionId: 118, correct: true, text: '', imageSrc: null },
            { id: 326, questionId: 118, correct: false, text: '', imageSrc: null },
            { id: 327, questionId: 119, correct: false, text: '', imageSrc: null },
            { id: 328, questionId: 119, correct: false, text: '', imageSrc: null },
            { id: 329, questionId: 119, correct: true, text: '', imageSrc: null },
            { id: 330, questionId: 119, correct: false, text: '', imageSrc: null },
            { id: 331, questionId: 120, correct: false, text: '', imageSrc: null },
            { id: 332, questionId: 120, correct: false, text: '', imageSrc: null },
            { id: 333, questionId: 120, correct: true, text: '', imageSrc: null },
            { id: 334, questionId: 120, correct: false, text: '', imageSrc: null },
            { id: 335, questionId: 121, correct: false, text: '', imageSrc: null },
            { id: 336, questionId: 122, correct: false, text: '', imageSrc: null },
            { id: 337, questionId: 122, correct: true, text: '', imageSrc: null },
            { id: 338, questionId: 122, correct: false, text: '', imageSrc: null },
            { id: 339, questionId: 123, correct: false, text: '', imageSrc: null },
            { id: 340, questionId: 123, correct: false, text: '', imageSrc: null },
            { id: 341, questionId: 123, correct: true, text: '', imageSrc: null },
            { id: 342, questionId: 123, correct: false, text: '', imageSrc: null },
            { id: 343, questionId: 124, correct: false, text: '', imageSrc: null },
            { id: 344, questionId: 124, correct: false, text: '', imageSrc: null },
            { id: 345, questionId: 124, correct: true, text: '', imageSrc: null },
            { id: 346, questionId: 124, correct: false, text: '', imageSrc: null },
            { id: 347, questionId: 125, correct: false, text: '', imageSrc: null },
            { id: 348, questionId: 125, correct: false, text: '', imageSrc: null },
            { id: 349, questionId: 125, correct: true, text: '', imageSrc: null },
            { id: 350, questionId: 125, correct: false, text: '', imageSrc: null },
            { id: 351, questionId: 126, correct: false, text: '', imageSrc: null },
            { id: 352, questionId: 126, correct: false, text: '', imageSrc: null },
            { id: 353, questionId: 126, correct: true, text: '', imageSrc: null },
            { id: 354, questionId: 126, correct: false, text: '', imageSrc: null },
            { id: 355, questionId: 127, correct: false, text: '', imageSrc: null },
            { id: 356, questionId: 127, correct: false, text: '', imageSrc: null },
            { id: 357, questionId: 127, correct: true, text: '', imageSrc: null },
            { id: 358, questionId: 127, correct: false, text: '', imageSrc: null },
            { id: 359, questionId: 128, correct: false, text: '', imageSrc: null },
            { id: 360, questionId: 128, correct: false, text: '', imageSrc: null },
            { id: 361, questionId: 128, correct: true, text: '', imageSrc: null },
            { id: 362, questionId: 128, correct: false, text: '', imageSrc: null },
            { id: 363, questionId: 129, correct: false, text: '', imageSrc: null },
            { id: 364, questionId: 129, correct: false, text: '', imageSrc: null },
            { id: 365, questionId: 129, correct: true, text: '', imageSrc: null },
            { id: 366, questionId: 129, correct: false, text: '', imageSrc: null },
            { id: 367, questionId: 130, correct: false, text: '', imageSrc: null },
            { id: 368, questionId: 130, correct: false, text: '', imageSrc: null },
            { id: 369, questionId: 130, correct: true, text: '', imageSrc: null },
            { id: 370, questionId: 130, correct: false, text: '', imageSrc: null },
            { id: 371, questionId: 131, correct: false, text: '', imageSrc: null },
            { id: 372, questionId: 131, correct: false, text: '', imageSrc: null },
            { id: 373, questionId: 131, correct: true, text: '', imageSrc: null },
            { id: 374, questionId: 131, correct: false, text: '', imageSrc: null },
            { id: 375, questionId: 132, correct: false, text: '', imageSrc: null },
            { id: 376, questionId: 132, correct: false, text: '', imageSrc: null },
            { id: 377, questionId: 132, correct: true, text: '', imageSrc: null },
            { id: 378, questionId: 132, correct: false, text: '', imageSrc: null },
            { id: 379, questionId: 133, correct: false, text: '', imageSrc: null },
            { id: 380, questionId: 133, correct: false, text: '', imageSrc: null },
            { id: 381, questionId: 133, correct: true, text: '', imageSrc: null },
            { id: 382, questionId: 133, correct: false, text: '', imageSrc: null },
            { id: 383, questionId: 134, correct: false, text: '', imageSrc: null },
            { id: 384, questionId: 134, correct: false, text: '', imageSrc: null },
            { id: 385, questionId: 134, correct: true, text: '', imageSrc: null },
            { id: 386, questionId: 134, correct: false, text: '', imageSrc: null },
            { id: 387, questionId: 135, correct: false, text: '', imageSrc: null },
            { id: 388, questionId: 135, correct: false, text: '', imageSrc: null },
            { id: 389, questionId: 135, correct: true, text: '', imageSrc: null },
            { id: 390, questionId: 135, correct: false, text: '', imageSrc: null },
            { id: 391, questionId: 136, correct: false, text: '', imageSrc: null },
            { id: 392, questionId: 136, correct: false, text: '', imageSrc: null },
            { id: 393, questionId: 136, correct: true, text: '', imageSrc: null },
            { id: 394, questionId: 136, correct: false, text: '', imageSrc: null },
            { id: 395, questionId: 137, correct: false, text: '', imageSrc: null },
            { id: 396, questionId: 137, correct: false, text: '', imageSrc: null },
            { id: 397, questionId: 137, correct: true, text: '', imageSrc: null },
            { id: 398, questionId: 137, correct: false, text: '', imageSrc: null },
            { id: 399, questionId: 138, correct: false, text: '', imageSrc: null },
            { id: 400, questionId: 138, correct: false, text: '', imageSrc: null },
            { id: 401, questionId: 138, correct: true, text: '', imageSrc: null },
            { id: 402, questionId: 138, correct: false, text: '', imageSrc: null },
            { id: 403, questionId: 139, correct: false, text: '', imageSrc: null },
            { id: 404, questionId: 139, correct: false, text: '', imageSrc: null },
            { id: 405, questionId: 139, correct: true, text: '', imageSrc: null },
            { id: 406, questionId: 139, correct: false, text: '', imageSrc: null },
            { id: 407, questionId: 140, correct: false, text: '', imageSrc: null },
            { id: 408, questionId: 140, correct: false, text: '', imageSrc: null },
            { id: 409, questionId: 140, correct: true, text: '', imageSrc: null },
            { id: 410, questionId: 140, correct: false, text: '', imageSrc: null },
            { id: 411, questionId: 141, correct: false, text: '', imageSrc: null },
            { id: 412, questionId: 141, correct: false, text: '', imageSrc: null },
            { id: 413, questionId: 141, correct: true, text: '', imageSrc: null },
            { id: 414, questionId: 141, correct: false, text: '', imageSrc: null },
            { id: 415, questionId: 142, correct: false, text: '', imageSrc: null },
            { id: 416, questionId: 142, correct: false, text: '', imageSrc: null },
            { id: 417, questionId: 142, correct: true, text: '', imageSrc: null },
            { id: 418, questionId: 142, correct: false, text: '', imageSrc: null },
            { id: 419, questionId: 143, correct: false, text: '', imageSrc: null },
            { id: 420, questionId: 143, correct: false, text: '', imageSrc: null },
            { id: 421, questionId: 143, correct: true, text: '', imageSrc: null },
            { id: 422, questionId: 143, correct: false, text: '', imageSrc: null },
            { id: 423, questionId: 144, correct: false, text: '', imageSrc: null },
            { id: 424, questionId: 144, correct: false, text: '', imageSrc: null },
            { id: 425, questionId: 144, correct: true, text: '', imageSrc: null },
            { id: 426, questionId: 144, correct: false, text: '', imageSrc: null },
            { id: 427, questionId: 145, correct: false, text: '', imageSrc: null },
            { id: 428, questionId: 145, correct: false, text: '', imageSrc: null },
            { id: 429, questionId: 145, correct: true, text: '', imageSrc: null },
            { id: 430, questionId: 145, correct: false, text: '', imageSrc: null },
            { id: 431, questionId: 146, correct: false, text: '', imageSrc: null },
            { id: 432, questionId: 146, correct: false, text: '', imageSrc: null },
            { id: 433, questionId: 146, correct: true, text: '', imageSrc: null },
            { id: 434, questionId: 146, correct: false, text: '', imageSrc: null },
            { id: 435, questionId: 147, correct: false, text: '', imageSrc: null },
            { id: 436, questionId: 147, correct: false, text: '', imageSrc: null },
            { id: 437, questionId: 147, correct: true, text: '', imageSrc: null },
            { id: 438, questionId: 147, correct: false, text: '', imageSrc: null },
            { id: 439, questionId: 148, correct: false, text: '', imageSrc: null },
            { id: 440, questionId: 148, correct: false, text: '', imageSrc: null },
            { id: 441, questionId: 148, correct: true, text: '', imageSrc: null },
            { id: 442, questionId: 148, correct: false, text: '', imageSrc: null },
            { id: 443, questionId: 149, correct: false, text: '', imageSrc: null },
            { id: 444, questionId: 149, correct: false, text: '', imageSrc: null },
            { id: 445, questionId: 149, correct: true, text: '', imageSrc: null },
            { id: 446, questionId: 149, correct: false, text: '', imageSrc: null },
            { id: 447, questionId: 150, correct: false, text: '', imageSrc: null },
            { id: 448, questionId: 150, correct: false, text: '', imageSrc: null },
            { id: 449, questionId: 150, correct: true, text: '', imageSrc: null },
            { id: 450, questionId: 150, correct: false, text: '', imageSrc: null },
            { id: 451, questionId: 152, correct: false, text: 'A velocidade do satélite é sempre constante.', imageSrc: null },
            { id: 452, questionId: 152, correct: true, text: 'A velocidade do satélite cresce à medida que o satélite caminha ao longo da curva ABC.', imageSrc: null },
            { id: 453, questionId: 152, correct: false, text: 'A velocidade do ponto B é máxima.', imageSrc: null },
            { id: 454, questionId: 152, correct: false, text: 'A velocidade do ponto D é mínima.', imageSrc: null },
            { id: 455, questionId: 153, correct: false, text: 'vi < vj e ai < aJ', imageSrc: null },
            { id: 456, questionId: 153, correct: false, text: 'vi > vj e ai < aJ', imageSrc: null },
            { id: 457, questionId: 153, correct: false, text: 'vi < vj  e ai > aJ', imageSrc: null },
            { id: 458, questionId: 153, correct: true, text: 'vi >vj  e ai > aJ', imageSrc: null },
            { id: 459, questionId: 154, correct: false, text: '2', imageSrc: null },
            { id: 460, questionId: 154, correct: false, text: '4', imageSrc: null },
            { id: 461, questionId: 154, correct: true, text: '8', imageSrc: null },
            { id: 462, questionId: 154, correct: false, text: '16', imageSrc: null },
            { id: 463, questionId: 155, correct: false, text: 'O dobro do período de B.', imageSrc: null },
            { id: 464, questionId: 155, correct: false, text: 'Quatro vezes o período de B.', imageSrc: null },
            { id: 465, questionId: 155, correct: true, text: 'Cerca de 2,8 vezes o período de B.', imageSrc: null },
            { id: 466, questionId: 155, correct: false, text: 'Igual ao período de B.', imageSrc: null },
            { id: 467, questionId: 156, correct: false, text: '2 UA', imageSrc: null },
            { id: 468, questionId: 156, correct: true, text: '4 UA', imageSrc: null },
            { id: 469, questionId: 156, correct: false, text: '16 UA', imageSrc: null },
            { id: 470, questionId: 156, correct: false, text: '64 UA', imageSrc: null },
            { id: 471, questionId: 157, correct: false, text: 'O mesmo de X.', imageSrc: null },
            { id: 472, questionId: 157, correct: false, text: 'Menor do que o de X.', imageSrc: null },
            { id: 473, questionId: 157, correct: false, text: 'O dobro do de X.', imageSrc: null },
            { id: 474, questionId: 157, correct: true, text: 'Mais do que o dobro do de X.', imageSrc: null },
            { id: 475, questionId: 158, correct: false, text: '3 UA', imageSrc: null },
            { id: 476, questionId: 158, correct: true, text: '9 UA', imageSrc: null },
            { id: 477, questionId: 158, correct: false, text: '27 UA', imageSrc: null },
            { id: 478, questionId: 158, correct: false, text: '81 UA', imageSrc: null },
            { id: 479, questionId: 159, correct: false, text: 'Tem um período orbital menor.', imageSrc: null },
            { id: 480, questionId: 159, correct: true, text: 'Tem um período orbital maior.', imageSrc: null },
            { id: 481, questionId: 159, correct: false, text: 'Tem a mesma velocidade orbital.', imageSrc: null },
            { id: 482, questionId: 159, correct: false, text: 'Tem maior aceleração centrípeta.', imageSrc: null },
            { id: 483, questionId: 160, correct: false, text: 'Dobrada.', imageSrc: null },
            { id: 484, questionId: 160, correct: false, text: 'Triplicada.', imageSrc: null },
            { id: 485, questionId: 160, correct: false, text: 'Reduzida pela metade.', imageSrc: null },
            { id: 486, questionId: 160, correct: true, text: 'Aumentada por um fator de 2,52.', imageSrc: null },
            { id: 487, questionId: 161, correct: false, text: 'O dobro do período do satélite mais próximo', imageSrc: null },
            { id: 488, questionId: 161, correct: true, text: 'Quatro vezes o período do satélite mais próximo.', imageSrc: null },
            { id: 489, questionId: 161, correct: false, text: 'Metade do período do satélite mais próximo.', imageSrc: null },
            { id: 490, questionId: 161, correct: false, text: 'Um quarto do período do satélite mais próximo.', imageSrc: null },
            { id: 491, questionId: 162, correct: false, text: '3/16 F', imageSrc: null },
            { id: 492, questionId: 162, correct: true, text: '1,5 F', imageSrc: null },
            { id: 493, questionId: 162, correct: false, text: '3 F', imageSrc: null },
            { id: 494, questionId: 162, correct: false, text: '12 F', imageSrc: null },
        ]);

        //------------------------------------------------        

        // outro
        /* await db.insert(schema.questions).values([
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
                id: 6,
                lessonId: 2, //verbs
                type: 'SELCT',
                order: 3,
                question: 'Qual desse é o Robo?'
            }
        ]); */
        console.log("Seeding finshed--------------------------------");


    } catch (error) {
        console.log(error);
        throw new Error("Falha ao se conectar ao banco de dados");

    }
}

main();