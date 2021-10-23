import styled from "styled-components";

export const Cardstyled=styled.div`
border-left:2px solid rgba(255,255,255,0.5);
border-top:2px solid rgba(255,255,255,0.5);
border-right:1px solid rgba(255,255,255,0.1);
border-bottom:1px solid rgba(255,255,255,0.1);
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
background-color:rgba(255,255,255,0.1);
border-radius:${({theme})=>theme.border_rd};
margin:2rem;
width:min(40rem,90vw);
`