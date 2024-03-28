import React from "react";
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
const Nombre = styled.h2`

    color: #fff;
    margin: 0;
    display:flex;
    align-items:center;

`


function NavBar(){
    const isScrolled = useScrollHandler();
    return(
        <ContenedorNav id=''>
            <Nav isScrolled={isScrolled}>
                <Nombre>Nogano</Nombre>
                <Ul>
                    <Li isScrolled={isScrolled}   >
                        <LinkStyled to="/inicio">Inicio</LinkStyled>
                    </Li>
                    <Li isScrolled={isScrolled} peque >
                        <LinkStyled to="/Menu">Menu</LinkStyled>
                    </Li>
                    <Li isScrolled={isScrolled}  peque>
                        <LinkStyled to="/Charolas">Charolas</LinkStyled>
                    </Li>
                    <Li isScrolled={isScrolled} grande>
                        <LinkStyled to="/Experiencia">Experiencia</LinkStyled>
                    </Li>
                    <Li isScrolled={isScrolled} grande>
                        <LinkStyled to="/Contacto">Contacto</LinkStyled>
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