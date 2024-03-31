import React from "react";
import {DisplayFStyled, Contenedor, ContenedorTPrincipal, ContenedorCarrousel, ContenedorContacto, ContenedorGeneral} from '../componentes/DisplayF'
import Carrousel from "../componentes/Carrousel";
import Contacto from "../componentes/Contacto";
import { MenuPaginaPrincipal } from "../componentes/Menu";
import Mapa from "../componentes/Mapa";
//import {manejarScroll} from '../js/funciones.js'
import NavBarStyled from "../componentes/NavBar";
import { FooterX } from "../componentes/Footer";

function PaginaInicio(){
   
    return(
        <>
            <NavBarStyled></NavBarStyled>
            <DisplayFStyled>

                <ContenedorTPrincipal titulo='NOGANO' />

                <ContenedorGeneral>
                    <MenuPaginaPrincipal>  </MenuPaginaPrincipal>
                </ContenedorGeneral>

                <ContenedorCarrousel >
                    <Carrousel />
                </ContenedorCarrousel>

                <ContenedorContacto>
                    
                    <Contacto />
                </ContenedorContacto>


                    
                
                
            </DisplayFStyled>
            <FooterX />
        </>
        

    );
}
export default PaginaInicio;