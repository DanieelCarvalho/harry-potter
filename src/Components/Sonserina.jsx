import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Style/SonserinaStyle";
import Sonse from "./img/Sonserina.png";

function Sonserina() {
  const [info, setInfo] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    axios
      .get("https://hp-api.herokuapp.com/api/characters/house/slytherin")
      .then((resposta) => {
        setInfo(resposta.data);
      })
      .catch((error) => {
        console.log("Deu ruim", error);
      });
  }, []);

  const lowerBusca = busca.toLowerCase();

  const Lista = info.filter((item) => {
    if (item.name.toLowerCase().includes(lowerBusca)) {
      return true;
    } else {
      return "";
    }
  });

  return (
    <S.Cobra>
      <S.Input>
        <input
          type="search"
          placeholder="Digite o nome do(a) bruxo(a)"
          value={busca}
          onChange={(e) => {
            setBusca(e.target.value);
          }}
        />
      </S.Input>
      <S.SectionG>
        {Lista.map((item, index) => (
          <S.Card key={index}>
            <img src={item.image || Sonserina} alt={item.name} />
            <S.CardP>
              <p>Nome: {item.name}</p>
              <p>Ancestralidade: {item.ancestry || "----"}</p>
              <p>Ano de Nascimento: {item.dateOfBirth || "----"}</p>
            </S.CardP>
          </S.Card>
        ))}
      </S.SectionG>
    </S.Cobra>
  );
}
export default Sonserina;
