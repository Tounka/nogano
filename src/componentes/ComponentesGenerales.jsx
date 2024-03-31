import styled from "styled-components"
import { Link } from "react-router-dom";
import { Children } from "react";
export const ContenedorTextoSeparador = styled.h2`
  font-size: 76px;
  @media (max-width: 480px)  {
    font-size: 48px;
  }
  font-weight: bold;
  margin-bottom: 24px;
  position: relative;
  padding: 10px;
  color: #fff;
  font-family: "Caveat", cursive;


`;
const ButtonToStyled = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 60px;
    padding: 10px 20px;
    width:100%;
    background-color: var(--colorRojoPrincipal);
    color: white;
    font-size:20px;
    transition: font-size .3s;
    font-weight:bold;
    &:hover {
        font-size: 22px;
    }
`

export const ButtonTo = ({text, to}) =>{
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "instant" })
      };
    
    return(
        <ButtonToStyled onClick={handleScrollToTop} to={to}>{text}</ButtonToStyled>
    )
}

