import styled from 'styled-components';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import {ContenedorTextoSeparador} from '../componentes/ComponentesGenerales'
const DivContenedor = styled.div`
  display: flex;
  height: 400px;
`;
const DivContenedorContacto = styled(DivContenedor)`
  @media (max-width: 600px) {
    flex-direction:column;
    height: auto;
  }

`

const ContenedorIzquierdo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    @media (max-width: 600px) {
      width:100%;
      margin-bottom: 10px;
  }
`;

const ContenedorDerecho = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 10px;
  @media (max-width: 600px) {
      width:100%;
      align-items:center;
      
  }
`;

const ContenedorImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const H2 = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  position: relative;
  padding: 10px;
  color: #fff;
`;

const TextoStyled = styled.p`
    width:100%;
  font-size: ${(props) => props.tamano || '20px'};
  font-weight: bold;
  margin-bottom: 12px;
  text-align: left;
  color: #fff;
  transition: 0.5s, color 0.10s;
  cursor: pointer;

  &:hover {
    transition: 0.5s, color 0.10s;
    color: #b02630;
    transform: translateY(-7px);
    @media (min-width: 600px) {
      transform: translatex(20px);
  }
    
  }
  @media (max-width: 600px) {
      text-align:center;
  }
`;
const Texto = ({tamano, texto}) =>{
  const hanleclick = (textoAcopiar) =>{
    navigator.clipboard.writeText(textoAcopiar);
  }
  return(
    <TextoStyled onClick={() => hanleclick(texto)} tamano={tamano}>{texto}</TextoStyled>
  )
}

const ContenedorIconos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const IconoStyled = styled.a`
    &&&{
        width: 50px;
        height: 50px;
        transition: 0.5s, color 0.10s;
        
        svg{
            color: #fff;
        }
    &:hover {
        transform: translateY(-10px);
        

        svg {
            color: #b02630 !important;
        }
    }
    }

`;

const Icono = ({ icono: IconoComponent, link }) => {
  return (
    <IconoStyled href={link}>
      <IconoComponent size='36px' />
    </IconoStyled>
  );
};

const Contacto = () => {
  return (
    <>
      <ContenedorTextoSeparador>Contacto</ContenedorTextoSeparador>
      <DivContenedorContacto className='row'>
        <ContenedorIzquierdo className="col-6 ">
          <ContenedorImg>
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.836397894542!2d-106.42970442465038!3d23.285393606469164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f5366d83afde1%3A0x4bb8dead1681a170!2sNagano%20Sushi%20Bar!5e0!3m2!1ses-419!2smx!4v1706029391951!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </ContenedorImg>
        </ContenedorIzquierdo>

        <ContenedorDerecho className="col-6">
          <Texto texto="Nogami" tamano='36px' />  
          <Texto texto="Av. La Piedad 4151, Real del Valle, 82124 Mazatlán, Sin." />
          <Texto texto="669 922 2924" />

          <ContenedorIconos className='gap-5'>
            <Icono icono={FaFacebook} link={'https://www.facebook.com/naganosushii?locale=es_LA'} />
            <Icono icono={FaInstagram} link={'https://www.instagram.com/naganosushimzt/?hl=es-la'} />
            <Icono icono={IoLogoWhatsapp} link={'https://web.whatsapp.com/send?phone=526699222924'} />
          </ContenedorIconos>
        </ContenedorDerecho>
      </DivContenedorContacto>
    </>
  );
};

export default Contacto;
