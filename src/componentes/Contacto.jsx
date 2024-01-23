import styled from 'styled-components';
import imgTitulo from '../img/imgLogo.jpg'
import '../styles/Contacto.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
const DivContenedor = styled.div`
    
    display:flex;
    
`
const ContenedorIzquierdo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const ContenedorDerecho = styled.div`
    display:flex;
    flex-direction:column;
    align-items:baseline;
    justify-content:center;
`
const ContenedorImg = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    max-width:100%;
    overflow:hidden;

`
const H2 = styled.h2`
    font-size:  36px;
    font-weight: bold;
    margin-bottom: 24px;

    
`
const Texto = styled.p`
    font-size:  20px;
    font-weight: bold;
    margin-bottom: 12px;
    text-align:left;
    
`
const ContenedorTextos = styled.div`
    display: flex;
    flex-direction:column;
    
    
`
const ContenedorIconos = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const Icono = ({ icono: IconoComponent, link }) => {

    return (
        <a href={link}><IconoComponent size='36px'/></a>
        
    );
}
const IconoStyled=styled(Icono)`
    max-width:50px;
`
const Contacto = () =>{
    return(
        <>
            <H2>Contacto</H2>
            <DivContenedor className='row'>
                <ContenedorIzquierdo className="col-6 ">
                    <div className="contenedorImg">
                        <img src={imgTitulo} alt="Logo principal" className='imgContacto' />
                    </div>
                </ContenedorIzquierdo>

                <ContenedorDerecho className="col-6">
                        <H2> Nogami </H2> 
                        <Texto>Av. La Piedad 4151, Real del Valle, 82124 Mazatlán, Sin.</Texto>
                        <Texto>669 922 2924</Texto>
                        
                        <ContenedorIconos className=' gap-5'>
                            <IconoStyled icono={FaFacebook}     link={'https://www.facebook.com/naganosushii?locale=es_LA'} /> 
                            <IconoStyled icono={FaInstagram}    link={'https://www.instagram.com/naganosushimzt/?hl=es-la'} /> 
                            <IconoStyled icono={IoLogoWhatsapp} link={'https://web.whatsapp.com/send?phone=526699222924'}/> 
                        </ContenedorIconos>
                  
                        
    

                </ContenedorDerecho>
        </DivContenedor>
        </>

    )

}

export default Contacto;