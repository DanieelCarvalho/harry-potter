import styled, { createGlobalStyle } from "styled-components";
import Casas from "../../img/casasharry.png";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family:  'Harry Potter';
        
       
    }
 
`;

export const Content = styled.section`
  background-image: url(${Casas});
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: center;
  width: 100%;
  height: 590px;
  background-color: #252525;
  display: flex;
  justify-content: right;
  @media (max-width: 500px) {
    background-size: 60%;
    height: 100vh;
  }
`;
export const Titulo = styled.h1`
  color: white;
  margin-top: 20px;
  font-size: 2vw;
  width: 100%;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 4vw;
    display: flex;
    justify-content: right;
    width: 60vw;
  }
`;
