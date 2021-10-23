import { Headerstyle } from "./styled/Heading.styled";
import { Dobstyled } from "./styled/Dob.styled";
import React, { useState } from "react";

 export let ageProvider;
export default function Age(){
    const [age,setAge]=useState("");
    
    function getAge(e){
        ageProvider=e.target.value.replace(/-/g,'/');
        setAge(e.target.value);
    }

     return(
         <div>
             <Headerstyle font_size={1.2} mg={0.3} type={"none"}>
                 Your Date Of Birth
             </Headerstyle>
             <Dobstyled type="date"  onChange={getAge}/>
         </div>
     )
}