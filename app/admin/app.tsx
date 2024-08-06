"use client"

import {Admin, Resource} from  "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = simpleRestProvider ('./api');

const App = () =>{
    return(
        <Admin dataProvider={dataProvider}> 
            <Resource 
                name="course "
            />
        </Admin>
    )
    
}

export default App;