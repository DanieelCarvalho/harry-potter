import styled, {createGlobalStyle} from "styled-components";
import Casas from '../img/casasharry.png'
import { Link } from "react-router-dom"


 
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,500;0,600;1,100;1,500&family=Mukta:wght@200;400;800&family=Open+Sans:wght@300&family=Playfair+Display:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,500;0,600;1,100;1,500&family=Mukta:wght@200;400;800&family=Open+Sans:wght@300&family=Playfair+Display:wght@700&display=swap');
    
     @import url('http://fonts.cdnfonts.com/css/harry-potter');

                
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family:  'Harry Potter';
        
       
    }
 
`; 

   

 export const Content  = styled.section`
     background-image: url(${Casas});
      background-repeat: no-repeat;
      background-size: 30%;
      background-position: center;
      width: 100%;
      height: 90vh;
      background-color:#252525;
      display: flex;
      justify-content: right;
      @media (max-width:500px){
        background-size: 60%;
        height: 100vh;
      }
 ` 
 export const Titulo = styled.h1`
    color: white;
    margin-top: 20px;
    font-size: 2vw;
    width: 100%;
    text-align: center;
    @media (max-width:500px){
      font-size: 4vw;
      display: flex;
      justify-content: right;
      width: 60vw;
    }
 `


  

