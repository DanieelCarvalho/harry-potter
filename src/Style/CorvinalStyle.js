import styled from "styled-components";
import Corvinal from '../img/corvinal.png'

export const Corvo = styled.section`
     width: 100%;   
    height: 89.8vh;
    background-image: url(${Corvinal}), linear-gradient(to  bottom , #252525 50%, #1b4c95   );
    background-color: black;
    background-repeat: no-repeat, repeat;
    background-attachment: fixed;
    background-size: 30%;
    background-position: center ;

` 
export const SectionG = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 20px;
    background-image: url(${Corvinal}), linear-gradient(to  bottom , #252525 50%, #1b4c95   );
    background-color: black;
    background-repeat: no-repeat, repeat;
    background-attachment: fixed;
    background-size: 30%;
    background-position: center;
    @media (max-width:500px){
     flex-direction: column;
     align-items: center;
    }
    

`

export const Card = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: top;
    width: 22vw;
    height: 65vh;
    border: solid #6d3700;
    margin-top: 20px;
    border-radius: 0px 0px 31px 31px;
    color:white;

img{
   
    width: 100%;
    height: 45vh;
    background-color: black;
   // border-radius:0px 0px 40px 40px; ;

}
@media (max-width:500px){
    width: 60vw;
    
    }

`
 export const CardP= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
    color: white;
    border: solid;
    background-color:#43484c;
    border-radius: 0px 0px 33px 33px;
    border: none;
    
   
    p{
        width: 20vw;
       
    }
    @media (max-width:500px){
        height: 30%;
        p{
        font-size: 3.5vw;
        width: 100%;
        padding-left: 10px;
    }
    }
 `
 export const Input = styled.div`
   
 display: flex;
 justify-content: flex-end;
 align-items: flex-end;
 width: 100%;
 height: 9vh;

input{
 width: 20vw;
 height: 5vh;
 border: none;
 border-radius: 5px;
 margin-right: 10px;
 @media (max-width:500px){
    width: 50vw;
    }
}
`