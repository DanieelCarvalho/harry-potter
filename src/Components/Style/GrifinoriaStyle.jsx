import styled from "styled-components";
import Grif from '../img/grifinoria.png'


export const Leao = styled.html`
    background-image: url(${Grif}) ;
    background-color: black;
    background-repeat: no-repeat, repeat;
    background-attachment: fixed;
    background-size: 35%;
    background-position: center ;



` 
export const SectionG = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 20px;
   
`
 
export const Card = styled.figure`
    display: flex;
    justify-content: center;
    align-items: top;
    width: 21vw;
    height: 60vh;
    border: solid black;
    margin-top: 20px;
    border-radius: 50px 50px;
    background-color: #a8090d;;
    color:white;

img{
    width: 20vw;
    height: 45vh;
    border-radius: 5%;

}

`
 export const CardP= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 12vh;
    white-space: 100%;
    
    p{
        width: 20vw;
       
    }
 `