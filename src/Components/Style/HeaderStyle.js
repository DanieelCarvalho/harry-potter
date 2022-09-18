import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom"
import Casas from '../img/casasharry.png'


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,500;0,600;1,100;1,500&family=Mukta:wght@200;400;800&family=Open+Sans:wght@300&family=Playfair+Display:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,500;0,600;1,100;1,500&family=Mukta:wght@200;400;800&family=Open+Sans:wght@300&family=Playfair+Display:wght@700&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family: "Merriweather", "Fira-Sans", Arial, sans-serif;
        
       
    }
 
`; 


export const Foto = styled.img`
    width: 10vh;
    

`

export const Menu= styled(Link)`
    text-decoration:none;
    color:white;

`
export const Ul = styled.ul`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;

`
export const Modal= styled.div`
display: none;

`

export const Nav = styled.nav`
    
`