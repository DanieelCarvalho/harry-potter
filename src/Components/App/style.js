import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'Harry Potter';
    font-style: normal;
    font-weight: 400;
    src: local('Harry Potter'), url('https://fonts.cdnfonts.com/s/25438/HARRP___.woff') format('woff');
}


                
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family:  'Harry Potter';
        
       
    }
 
`;
