import React, {useState, useEffect} from "react";
import axios from "axios";
import * as S from './Style/CorvinalStyle'
import Corvi from './img/corvinal.png'


 function Corvinal(){
    
    const[info, setInfo] = useState([])
   
    
useEffect(() =>{
    axios
    .get("https://hp-api.herokuapp.com/api/characters/house/Ravenclaw")
    .then((resposta) =>{
        setInfo(resposta.data)
     
       
    })
    .catch((error) =>{
        console.log("Deu ruim", error)
    })
    
});
    return(
        <S.Corvo>
        <S.SectionG>
                {info.map((item, index) =>(
                <S.Card key={index}>
                    
                    <img src={item.image || Corvi } alt={item.name}/>
                    <S.CardP>
                        <p>Nome: {item.name}</p>
                        <p>Ancestralidade: {item.ancestry || '----'}</p>
                        <p>Ano de Nascimento: {item.dateOfBirth || "----"}</p>
                    </S.CardP> 
                
                </S.Card>
            ))}
        </S.SectionG>
        </S.Corvo>
    )
 }

 export default Corvinal;