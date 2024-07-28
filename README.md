#                       CLONE DUOLINGO UTILIZANDO NEXT JS

  Até esse trecho tinhamos a tela LEARN feita e estavamos prestes a começas a tela LESSONS.
  
  Foram feitas a queries com os gets para as principais informações, sendo elas:
  + getuserProgress
  + getUnits
  + getCourses
  + getCourseById
  + getCourseProgress
  + getLesson
  + getLessonPercentage

## **Dificuldade**  

+ Dificuldade para compreenção da sintaxe de longo trechos de código, principalmente o back end
+ Um pouco de dificuldade para identificar o fluxo dos dados

##  **Lembrete futuro**
+ Acessar branch e pesquisar conceitos utilizado, como:
```
const unitsInActiveCourse =await db.query.units.findMany({
        orderBy: (units, {asc}) =>[asc(units.order)],
        where: eq(units.courseId, userProgress.activeCourseId),
        with: {
            lessons: {
                orderBy: (lessons, { asc }) => [asc(lessons.order)],
                with: {
                    unit: true,
                    challenges: {
                        with:{
                            challengeProgress: {
                                where: eq(challengeProgress.userId, userId),
                            }
                        }
                    }
                }
            }
        }
    });
```
+ Aprender sobre map
```
const lessonsWitthCompletedStatus =unit.lessons.map((lesson) =>{
```

+ Entender esse tipo de return
```
return{...lesson, completed: false}
```

