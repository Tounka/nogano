import styled from "styled-components"
import { Link } from "react-router-dom";
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
export const BottonTo = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
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

