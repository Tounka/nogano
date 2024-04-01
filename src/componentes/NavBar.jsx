import React, { Children } from "react";
import styled from "styled-components";
import { Link} from 'react-router-dom';
import { useState, useEffect } from "react";

const useScrollHandler = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleScroll = () => {
      let scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY >= 100);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return isScrolled;
  };


const Nav = styled.nav`
    
    background-color: ${props => (props.isScrolled ? 'rgb(89 0 9)' : 'transparent')};
    
    display:flex;
    transition: background-color 0.5s ease;
    justify-content: space-between ;
    height:100%;
    z-index:100;
    
    a{
        text-decoration: none !important;
        font-weight:bold;
    }
    
`
const ContenedorNav = styled.div`
    position: fixed;
    width:100%;
    height: 70px;
    z-index:100;
    
`
const Ul = styled.ul`
    display:flex;
    justify-content: center;
    align-items:center;
    height: 100%;
    margin-bottom: 0;
    > *{

        display:flex;
        justify-content:center;
        align-items:center;
    }

    
`
const Li = styled.li`
   @media (max-width: 350px) {
        display: ${props => (props.peque ? 'none' : 'flex')};
    }
    @media (max-width: 480px) {
        display: ${props => (props.mediano ? 'none' : 'flex')};
    }
    @media (max-width: 600px) {
        display: ${props => (props.grande ? 'none' : 'flex')};
    }
    
    &:hover >*{
        
        color: ${props =>(props.isScrolled ?  '#000000'  : '#C6313F')};
        transition: color .2s ease;
     
    }
    transition: color .2s ease;
`
const LinkStyled = styled(Link)`  
    height:100%;
    width:100%;
    text-align:center;

`
const LinkNav = ({ text, to, scroll }) => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    const handleScrollToNextId = () => {
        const seccionX = document.getElementById(scroll); // Accede directamente a scroll
        if (seccionX) {
            seccionX.scrollIntoView({ behavior: "smooth", block: "start" });
        }else{

        }
    };

    return (
        <LinkStyled to={to} onClick={scroll ? handleScrollToNextId : handleScrollToTop}>
            {text}
        </LinkStyled>
    );
}
const Nombre = styled.h2`

    color: #fff;
    margin: 0;
    display:flex;
    align-items:center;
    font-family: "Caveat", cursive;

`


function NavBar(){
    const isScrolled = useScrollHandler();
    return(
        <ContenedorNav >
            <Nav isScrolled={isScrolled}>
                <Nombre>Nogano</Nombre>
                <Ul>
                    <Li isScrolled={isScrolled}   >
                        <LinkNav to="/"  scroll="Inicio" text="Inicio" ></LinkNav>
                    </Li>
                    <Li isScrolled={isScrolled} peque to="Menu">
                        <LinkNav to="/Menu" text="Menu"></LinkNav>
                    </Li>
                    <Li isScrolled={isScrolled} grande>
                        <LinkNav to="/" scroll="Carrousel" text="Experiencia"></LinkNav>
                    </Li>
                    <Li isScrolled={isScrolled} grande>
                        <LinkNav to="/" scroll="Contacto"  text="Contacto"></LinkNav>
                    </Li>
                </Ul>
            </Nav>

        </ContenedorNav>
       
        
    ) 
}
export function NavBarContacto(){
    const isScrolled = useScrollHandler();
    return(
        <ContenedorNav >
            <Nav isScrolled={isScrolled}>
                <Nombre>Nogano</Nombre>
                <Ul>
                    <Li isScrolled={isScrolled}   >
                        <LinkNav to="/" text="Inicio" ></LinkNav>
                    </Li>
                    
                </Ul>
            </Nav>

        </ContenedorNav>
       
        
    ) 
}
const NavBarStyled = styled(NavBar)`
    background-color:black;
    display:flex;

`
export default NavBarStyled;