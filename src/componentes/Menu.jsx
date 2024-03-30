import {menuCompleto} from '../js/menu.js'
import {ContenedorTextoSeparador, BottonTo} from './ComponentesGenerales.jsx'
import styled from 'styled-components'
import imgBg from '../img/marmolBg.jpg'
import { Link } from 'react-router-dom'

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
const SeparadorPMenu = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 150px;
`
export const Menu = () => {

    
    return(
       <ContenedorPMenu>

         
         

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

const ContenedorDisplayGridMenu = styled.div`
    width: 100%;
    height: 545px;


    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 15px;

`

const ContenedorCardImg = styled.div`
    width: 100%;
    height: 100%;
    perspective: 1000px;
    &:hover .clImgMenuInner{
    transform: rotateY(180deg);
  }
 
`
const ContenedorCardImg_Inner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;

`
const ContenedorCardImgLargo = styled(ContenedorCardImg)`
 
    grid-column: span 2; 
`
const ContenedorCardImg_front = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    backface-visibility: hidden;
   
`
const ContenedorCardImg_back = styled.div`
width: 100%;
  height: 100%;
  background-color: #f00;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`
export const MenuPaginaPrincipal = () =>{
    return(
        <>
            <ContenedorDisplayGridMenu>
                <ContenedorCardImg>
                    <ContenedorCardImg_Inner className='clImgMenuInner'>
                        <ContenedorCardImg_front>Hola</ContenedorCardImg_front>
                        <ContenedorCardImg_back>ADIOS</ContenedorCardImg_back>

                    </ContenedorCardImg_Inner>
          

                </ContenedorCardImg>
            </ContenedorDisplayGridMenu>
            <BottonTo to="Menu">Ver Menu Completo</BottonTo>
        </>
        
    )
}

