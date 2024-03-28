import {menuCompleto} from '../js/menu.js'
import {ContenedorTextoSeparador} from './ComponentesGenerales.jsx'
import styled from 'styled-components'
import imgBg from '../img/marmolBg.jpg'
const TextoCategoria = styled.p`
    color: ${props => (props.rojo ? 'var(--colorRojoPrincipal)' : '#fff')} !important;
    font-size: 26px;
    text-align:center;
    font-weight:bold;
    color: #fff;
    
`
const TextoMenu = styled.p`
    font-size: ${props => (props.principal ? '20px' : '16px')};
    color: ${props => (props.rojo ? 'var(--colorRojoPrincipal)' : '#fff')};
    margin: 0;
    text-align:left;


`
const ContenedorCarta = styled.div`
    width:90%;
    margin: 10px;
    
`
const ContenedorCartaCategoriaStyled =styled.div`
    display:flex;
    width: 100%;
    margin-bottom: 5px;
`
const ContenedorCartaIzquierdoStyled = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
    width: 85%;
    @media (max-width: 480px) {
        width: 75%;
    }
`
const ContenedorCartaDerechoStyled = styled.div`
    width: 15%;
    display:flex;
    align-items:center;
    justify-content:end;
    @media (max-width: 480px) {
        width: 25%;
    }

`

const ContenedorCartaCategoria = ({nombre, descripcion, precio}) =>{
    return(
        <ContenedorCartaCategoriaStyled>
            <ContenedorCartaIzquierdoStyled> 
                <TextoMenu principal rojo> {nombre} </TextoMenu>
                <TextoMenu >  {"- " + descripcion} </TextoMenu>

            </ContenedorCartaIzquierdoStyled>
            <ContenedorCartaDerechoStyled> <TextoMenu principal > {precio} </TextoMenu></ContenedorCartaDerechoStyled>
        </ContenedorCartaCategoriaStyled>
    )
}


const ContenedorPMenu = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:100%;
    min-height:100%;
    flex-direction:column;
`
export const Menu = () => {

    
    return(
       <ContenedorPMenu>
         <ContenedorTextoSeparador> Menu </ContenedorTextoSeparador>
         

         {menuCompleto.map(categoria => (
            <ContenedorCarta key={categoria[0]}>
                <TextoCategoria rojo>{categoria[0]}</TextoCategoria>
                {categoria[1].map(elementoMenu =>(
                          <ContenedorCartaCategoria 
                          nombre={elementoMenu.producto} 
                          descripcion={elementoMenu.descripcion} 
                          precio={elementoMenu.precio} 
                      />
                ))}
          
            </ContenedorCarta>
        ))}

            
            

        
       </ContenedorPMenu>
    )
}