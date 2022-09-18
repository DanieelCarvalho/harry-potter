import React, {useState, useEffect} from "react";
import axios from "axios";



function LufaLufa(){
    
    const[info, setInfo] = useState([])
   
   
useEffect(() =>{
    axios
    .get("https://hp-api.herokuapp.com/api/characters/house/Hufflepuff")
    .then((resposta) =>{
        setInfo(resposta.data)
     
       
    })
    .catch((error) =>{
        console.log("Deu ruim", error)
    })
    
});
    return(
        <div>
                {info.map((item, index) =>(
                <figure key={index}>
                    <p>{item.name}</p>
                    <p>{item.house}</p>
                <img src={item.image} alt="#"/>

                </figure>
            ))}
        </div>
    )
 }


 export default LufaLufa;