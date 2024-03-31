import {menuCompleto, menuConImg} from '../js/menu.js'
import {ContenedorTextoSeparador, ButtonTo} from './ComponentesGenerales.jsx'
import styled from 'styled-components'
import imgBg from '../img/marmolBg.jpg'



const TextoCategoria = styled.p`
    color: ${props => (props.rojo ? 'var(--colorRojoSecundario)' : '#fff')} !important;
    font-size: 26px;
    text-align:center;
    font-weight:bold;
    color: #fff;
    
`
const TextoMenu = styled.p`
    font-size: ${props => (props.principal ? '20px' : '16px')};
    color: ${props => (props.rojo ? 'var(--colorRojoSecundario)' : '#fff')};
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
    @media (max-width: 480px) {
        grid-gap: 8px;
    }

    margin-bottom: 20px;
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
const ContenedorCardImgFrontStyled = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.img ? require(`../img/imagenesComida/${props.img}.webp`) : '#fff'});
    background-color: rgba(0, 0, 0, 0.5); 
    background-blend-mode: overlay;
    background-position: center;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    backface-visibility: hidden;
    
   
`


const ContenedorCardImgFront = ({nombre, img}) =>{
    
    return(
        <ContenedorCardImgFrontStyled img= {img}>
            <TextoFrontMenu>{nombre}</TextoFrontMenu>
        </ContenedorCardImgFrontStyled>
    )
} 

const ContenedorTextoBackMenuStyled = styled.div`
    height: 100%;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background-image: url(${imgBg});
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: overlay;
    background-size: 200px;

   
   
    overflow:hidden;
    
`
const ContenedorTextoScroll = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
  background: transparent; 
}


::-webkit-scrollbar-track {
  background: transparent;
}
  height: 100%;
  width: 100%;

  @media (max-width: 480px) {
    gap: 10px; 
  }
`;
const TextoBackMenu = styled.p`

    font-family: ${props => props.principal ? `"Caveat", cursive;` : ""};
    text-shadow: ${props => props.principal ? "2px 2px 4px rgba(0, 0, 0, 0.5)" : ""}; 
    font-size: ${props => props.principal ? "24px" : "14px"};
    color: ${props => props.principal ? "var(--colorRojoSecundario)" : "white"};
    font-weight:bold;
    margin: 6px 0;


    
`
const TextoFrontMenu = styled(TextoBackMenu)`
    font-size: 24px;
    @media (max-width: 480px) {
        font-size: 16px;
    }
`
const ContenedorTextoBackMenu = ({nombre, descripcion, precio}) =>{
    return(
        <ContenedorTextoBackMenuStyled>
            <ContenedorTextoScroll>
                <TextoBackMenu principal> {nombre} </TextoBackMenu>
                <TextoBackMenu secundario> {descripcion} </TextoBackMenu>
                <TextoBackMenu > {precio} </TextoBackMenu>
            </ContenedorTextoScroll>
       
        </ContenedorTextoBackMenuStyled>
    )
}


const CardMenu = ({tamano, img,descripcion, precio, nombre})=>{
    
    const ComponenteCardFinal = tamano ? ContenedorCardImgLargo : ContenedorCardImg;
    return(
        <ComponenteCardFinal>
        <ContenedorCardImg_Inner className='clImgMenuInner'>
            <ContenedorCardImgFront nombre={nombre} img={img}> {nombre}</ContenedorCardImgFront>
            <ContenedorTextoBackMenu nombre={nombre} descripcion={descripcion} precio={precio} />

        </ContenedorCardImg_Inner>
    </ComponenteCardFinal>
    )

}
export const MenuPaginaPrincipal = () => {
    return (
        <>
            <ContenedorDisplayGridMenu>
                {menuConImg.map((item, index) => {
                    const tamano = (index === 0 || index === 5 || index === 6) ? "grande" : "";
                    return (
                        <CardMenu key={index} tamano={tamano} nombre={item.producto} img={item.img} descripcion={item.descripcion} precio={item.precio} />
                    );
                })}
            </ContenedorDisplayGridMenu>
            <ButtonTo to="Menu" text="Ver Menu Completo" />
        </>
    );
}


