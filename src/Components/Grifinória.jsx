import React, {useState, useEffect} from "react";
import axios from "axios";
import * as S from './Style/GrifinoriaStyle'
import Grif from './img/grifinoria.png'


 function Grifinória(){
    
    const[info, setInfo] = useState([])

useEffect(() =>{
    axios
    .get("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
    .then((resposta) =>{
        setInfo(resposta.data)
    })
    .catch((error) =>{
        console.log("Deu ruim", error)
    })
    
});
    return(
        <S.Leao>
        <S.SectionG>
                {info.map((item, index) =>(
                <S.Card key={index}>
                    
                    <img src={item.image || Grif } alt={item.name}/>
                    <S.CardP>
                        <p>Nome: {item.name}</p>
                        <p>Ancestralidade: {item.ancestry || '----'}</p>
                        <p>Ano de Nascimento: {item.dateOfBirth || "----"}</p>
                    </S.CardP> 
                
                </S.Card>
            ))}
        </S.SectionG>
        </S.Leao>
    )
 }

 export default Grifinória;