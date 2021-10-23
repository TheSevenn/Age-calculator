import React from "react";
import { Cardstyled } from "./styled/Card.styled";
import Button from "./Button";
import Header from "./Header";
import Age from "./Age";

export default function Card(){
    return (
      <Cardstyled>
         <Header/>
         <Age/>
         <Button/>
         </Cardstyled>
    )
}