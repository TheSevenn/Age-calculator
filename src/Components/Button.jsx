import React, { useState } from "react";
import { Buttonstyled } from "./styled/Button.styled";
import { ageProvider } from "./Age";
import styled from "styled-components";

const Result=styled.div`
color:rgba(255,255,255,0.8);
font-size:1.6rem;
font-weight:700;
margin:2rem 1rem 0 1rem;
`
function Yourage(props){
   
    if(!props.status)
    return null;

    return (
        <Result>
          your age: {props.response} yr
        </Result>
    )

}

export default function Button(){
    const [status,setStatus]=useState(false);
       let agegetter=0;
    if(ageProvider!==""){
       let dob=new Date(ageProvider);
       let dateToday=new Date();
       let years=dateToday.getFullYear()-dob.getFullYear();
       // to check if birthday is not yet arrived
       if(dob.getMonth()>dateToday.getMonth()||(dob.getMonth()===dateToday.getMonth()&&
       dateToday.getDate()<dob.getDate()))
       years--;
       if(!isNaN(Number(years)))
       agegetter=years;
    }
    function getAgeToday(){
        setStatus(!status);
    }
 return (
     <React.Fragment>
     <Yourage status={status} response={agegetter}/>
    <Buttonstyled onClick={getAgeToday}>
        {status?"RESET":"GET AGE"}
    </Buttonstyled>
    </React.Fragment>
 )
}