import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "./Components/Card";


const theme={
    primary:'#7165ff',
    secondary:'#eb12cf',
    text_color:'#fff',
    border_rd:'0.7rem'
}

 export default function App(){
    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
         <Card/>
        </React.Fragment>
        </ThemeProvider>
    )
}