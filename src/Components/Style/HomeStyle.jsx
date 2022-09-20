import styled from "styled-components";
import Casas from '../img/casasharry.png'
import { Link } from "react-router-dom"

 

   

 export const Content  = styled.section`
     background-image: url(${Casas});
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: center;
      width: 100%;
      height: 90vh;
      background-color:#252525;
      display: flex;
      justify-content: right;
 ` 
 export const Titulo = styled.h1`
    color: white;
    margin-top: 20px;
    font-size: 2vw;
    width: 100%;
    text-align: center;
    @media (max-width:500px){
      font-size: 4vw;
      font-weight: 400;
      display: flex;
      justify-content: right;
      width: 60vw;
    }
 `


  

