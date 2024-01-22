import React from "react";
import styled from "styled-components";
const Div = styled.div`
    
        width:100%;
        height:100%;
        background-color:black;
    
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
    

    
`
export const Contenedor =({children}) =>{
    return(
        <Div100Vh >
            {children}
        </Div100Vh>
    )
}
const H1 = styled.h1`
    color:white;
`
export const ContenedorTPrincipal = ({titulo}) =>{
    return(
        <Contenedor>
            <H1>
                {titulo}
            </H1>
        </Contenedor>
    )
}
export const ContenedorCarrousel = ({children}) =>{
    return(
        <div className="container-sm">
            {children}
        </div>
    )
}
export const ContenedorContacto = ({children}) =>{
    return(
        <div className="container-sm">
            <Contenedor >
                {children}
            </Contenedor>
        </div>

    )
}



