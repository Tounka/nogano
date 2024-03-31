import React from "react";
import styled from "styled-components";
import { ContenedorTextoSeparador } from "./ComponentesGenerales";
const Div = styled.div`
    
        width:100%;
        height:100%;
        max-height: auto;
        background-color:black;
        padding-top: 70px;
`

export const DisplayFStyled = ({children})=> {
    return(
        <Div className="contenedorP">
            {children}
        </Div>
    );
}

const Div100Vh = styled(Div)`
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    height: 100%;
    min-height: 90vh;
    padding: 40px 0;
    
`
const ContenedorVertical = styled(Div100Vh)`
    flex-direction:column;
    
`

export const Contenedor =({children , id}) =>{
    return(
        <Div100Vh id={id}>
            {children}
        </Div100Vh>
    )
}
const H1 = styled.h1`
    color:white;
`
export const ContenedorTPrincipal = ({titulo}) =>{
    return(
        
        <Contenedor id="Inicio">
            <ContenedorTextoSeparador>
                {titulo}
            </ContenedorTextoSeparador>
        </Contenedor>
        
    
    )
}
const ContenedorCaStyled = styled(Div100Vh)`
    height: auto;
    max-height: 800px;
    padding: 40px 0;
    
`
export const ContenedorCarrousel = ({children}) =>{
    return(
        <ContenedorCaStyled>
            <div className="container-sm">
                {children}
            </div>
        </ContenedorCaStyled>
 
    )
}
export const ContenedorContacto = ({children}) =>{
    return(
        <div className="container-sm">
            <ContenedorVertical >
                {children}
            </ContenedorVertical>
        </div>

    )
}
export const ContenedorGeneral = ({children}) =>{
    return(
        <div className="container-sm">
            <ContenedorVertical >
                {children}
            </ContenedorVertical>
        </div>

    )
}



