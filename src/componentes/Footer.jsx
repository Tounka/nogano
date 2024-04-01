import styled from "styled-components"

const ContenedorFooter = styled.div`
    margin-top: 30px;
    width: 100%;
    height: auto;
    display:flex;
    padding: 30px 0;
    justify-content:center;
    border-top: 3px solid ;
    font-size: 18px;
    color: white;
    text-align:center;
`
export const FooterX = () =>{
    return(
        <ContenedorFooter>
            Desarrollado por Ramón Castillo <br />  
            Luisarraca@hotmail.com <br />  
            6691382961

        </ContenedorFooter>
    )
}