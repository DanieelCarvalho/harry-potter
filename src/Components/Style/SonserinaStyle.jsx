import styled from "styled-components";
import Sonserina from '../img/Sonserina.png'

export const Cobra = styled.html`
    background-image: url(${Sonserina}),  linear-gradient(to  bottom , #252525 50%, #1d7452 );
    background-color: black;
    background-repeat: no-repeat, repeat;
    background-attachment: fixed;
    background-size: 33%;
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
    flex-direction: column;
    justify-content: ;
    align-items: top;
    width: 22vw;
    height: 65vh;
    border: solid #dce2e2;
    margin-top: 20px;
    border-radius: 0px 0px 31px 31px;
    color:white;

img{
   
    width: 100%;
    height: 45vh;
    background-color: black;
   // border-radius:0px 0px 40px 40px; ;

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
 `