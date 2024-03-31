import {DisplayFStyled} from '../componentes/DisplayF'
import {NavBarContacto} from '../componentes/NavBar';
import {ContenedorTextoSeparador} from '../componentes/ComponentesGenerales'
import { Menu } from "../componentes/Menu";
function PaginaMenu(){
    return(
        <>
            <NavBarContacto />
            
            <DisplayFStyled>
                
                <Menu></Menu>
            </DisplayFStyled>
        </>

    )
}

export default PaginaMenu;