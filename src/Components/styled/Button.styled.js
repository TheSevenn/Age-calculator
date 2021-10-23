import styled from "styled-components";

export const Buttonstyled=styled.button`
background-image:linear-gradient(to top right,${({theme})=>theme.primary},
${({theme})=>theme.secondary});
padding:1rem 3rem;
margin:3rem;
border-radius:${({theme})=>theme.border_rd};
color:rgba(255,255,255,0.8);
font-weight:500;
font-size:1.6rem;

&:hover,&:focus{
    transform:scale(0.98);
    cursor:pointer;
}
`