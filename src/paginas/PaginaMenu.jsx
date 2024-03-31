import {DisplayFStyled} from '../componentes/DisplayF'
import {NavBarContacto} from '../componentes/NavBar';
import {ContenedorTextoSeparador} from '../componentes/ComponentesGenerales'
import { Menu } from "../componentes/Menu";
import { FooterX } from '../componentes/Footer';
function PaginaMenu(){
    return(
        <>
            <NavBarContacto />
            
            <DisplayFStyled>
                
                <Menu></Menu>
            </DisplayFStyled>
            <FooterX />
        </>

    )
}

export default PaginaMenu;