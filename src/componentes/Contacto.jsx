import styled from 'styled-components';
import imgTitulo from '../img/imgLogo.jpg'
const DivContenedor = styled.div`
    height:200px;
`
const Contacto = () =>{
    return(
        <DivContenedor className='row'>
            <div className="col-6">
                <img src={imgTitulo} alt="" />
            </div>
            <div className="col-6">
                adios
            </div>
        </DivContenedor>
    )

}

export default Contacto;