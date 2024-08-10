import { getCourses, getuserProgress } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () =>{
    const courses = await getCourses();
    const userProgress = await getuserProgress();

    return(
        <div className="h-full max-w-[912px] px-3 mx-auto ">
            <h1 className="text-2xl font-bold text-neutral-700 ">
                Selecione a área da física 
            </h1>
           <List
                courses ={courses}
                activeCourseId = {userProgress?.activeCourseId}
           />
        </div>
    )
}

export default CoursesPage;