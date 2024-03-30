import {DisplayFStyled} from '../componentes/DisplayF'
import NavBarStyled from '../componentes/NavBar';
import {ContenedorTextoSeparador} from '../componentes/ComponentesGenerales'
import { Menu } from "../componentes/Menu";
function PaginaMenu(){
    return(
        <>
            <NavBarStyled />
            
            <DisplayFStyled>
                
                <Menu></Menu>
            </DisplayFStyled>
        </>

    )
}

export default PaginaMenu;