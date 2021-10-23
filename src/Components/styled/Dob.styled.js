import styled from "styled-components";

export const Dobstyled=styled.input`
   width:min(25rem,90vw);
   border:3px solid rgba(255,255,255,0.1);
   padding:0.5rem;
   margin:0.2rem 1rm 1rem 1rem;
   color:${({theme})=>theme.text_color};
   font-weight:500;
   font-size:1.6rem;
   border-radius:${({theme})=>theme.border_rd};

   &:focus{
       border:3px solid rgba(255,255,255,0.5);
       transform:scale(0.98);
   }
`