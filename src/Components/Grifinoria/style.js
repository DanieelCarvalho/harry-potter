import styled, { createGlobalStyle } from "styled-components";
import Grif from "../../img/grifinoria.png";
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

export const Leao = styled.section`
  width: 100%;
  height: 89.8vh;
  background-image: url(${Grif}),
    linear-gradient(to bottom, #252525 50%, #a8090d);
  background-color: black;
  background-repeat: no-repeat, repeat;
  background-attachment: fixed;
  background-size: 30%;
  background-position: center;
`;
export const SectionG = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 20px;
  background-image: url(${Grif}),
    linear-gradient(to bottom, #252525 50%, #a8090d);
  background-color: black;
  background-repeat: no-repeat, repeat;
  background-attachment: fixed;
  background-size: 30%;
  background-position: center;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: top;
  width: 22vw;
  height: 65vh;
  border: solid #f18f37;
  margin-top: 20px;
  border-radius: 0px 0px 31px 31px;
  color: white;

  img {
    width: 100%;
    height: 45vh;
    background-color: black;
    // border-radius:0px 0px 40px 40px; ;
  }
  @media (max-width: 500px) {
    width: 60vw;
  }
`;
export const CardP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  color: white;
  border: solid;
  background-color: #43484c;
  border-radius: 0px 0px 33px 33px;
  border: none;
  p {
    width: 20vw;
  }
  @media (max-width: 500px) {
    height: 30%;
    p {
      font-size: 3.5vw;
      width: 100%;
      padding-left: 10px;
    }
  }
`;
export const Input = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 9vh;

  input {
    width: 20vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    @media (max-width: 500px) {
      width: 50vw;
    }
  }
`;