import React from "react";
import {DisplayFStyled, Contenedor, ContenedorTPrincipal, ContenedorCarrousel, ContenedorContacto} from '../componentes/DisplayF'
import Carrousel from "../componentes/Carrousel";
import Contacto from "../componentes/Contacto";
//import {manejarScroll} from '../js/funciones.js'
import NavBarStyled from "../componentes/NavBar";

function PaginaInicio(){
   
    return(
        <>
            <NavBarStyled></NavBarStyled>
            <DisplayFStyled>

                <ContenedorTPrincipal titulo='NOGANO' />

                <ContenedorCarrousel >
                    <Carrousel />
                </ContenedorCarrousel>

                <ContenedorContacto>
                    
                    <Contacto />
                </ContenedorContacto>
    
                
                    
                
            </DisplayFStyled>
        </>
        

    );
}
export default PaginaInicio;