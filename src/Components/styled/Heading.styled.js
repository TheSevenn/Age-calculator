import styled from "styled-components";

export const Headerstyle=styled.h1`
    font-size:${(props)=>props.font_size}rem;
    color:${({theme})=>theme.text_color};
    margin:1rem 1rem ${(props)=>props.mg}rem 1rem;
    border-bottom:3px ${(props)=>props.type} rgba(255,255,255,0.5);
`