import img1 from '../img/imgComida1.jpg'
import img2 from '../img/ImgComida2.jpg'
import img3 from '../img/ImgComida3.jpg'
import styled from 'styled-components'
const Carrousel = () =>{
    const ContenedorImgStyled = styled.div`
        height:500px;
        width:100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover; /* Ajusta la imagen para cubrir completamente el contenedor */
            opacity: 0.6; /* Cambia la opacidad de la imagen */
        }
        h5,p{
            font-size:1.2em !important;
            text-shadow: 0 0 18px black;
        }

    `
    const ContenedorCStyled = styled.div`
        display:flex;
        flex-direction:column;
        gap:30px;
    `
    const H1 = styled.div`
        color:white;
        text-align:center;
        font-size:24px;
        font-weight:bold;
    `
    return(
        <ContenedorCStyled>
            <H1>
                Todo tiene sentido con un delicioso rollo.
            </H1>
            <div id="carouselExampleCaptions" className="carousel slide ">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <ContenedorImgStyled className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Las Mejores Charolas</h5>
                        <p>Animate y pide una de nuestras deliciosas charolas a los mejores precios.</p>
                    </div>
                </ContenedorImgStyled>
                <ContenedorImgStyled className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Una Ambientación Excelente</h5>
                        <p>Ven y disfruta con tu familia en nuestra sucursal.</p>
                    </div>
                </ContenedorImgStyled>
                <ContenedorImgStyled className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>El Mejor Gohan De La Ciudad</h5>
                        <p>Deleita tus paladares con nuestra variedad de platillos.</p>
                    </div>
                </ContenedorImgStyled>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </ContenedorCStyled>
    );
}

export default Carrousel;