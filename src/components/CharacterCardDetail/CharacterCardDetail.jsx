import React from "react";
import { Link } from "react-router-dom";
import CharDetail from "./CharDetail/CharDetail";
import "./CharacterCardDetail.scss"

const CharacterCardDetail = ({ character }) => {
  return (
    <div>
      <Link to="/characters">← Go back to characters</Link>
      <figure>
        <img src={character.image} alt={character.name} />
        <figcaption>{character.name}</figcaption>
      </figure>
      <div className="div-details">
        <CharDetail  detail={character.allegiances} title="allegiances"/>
        <CharDetail  detail={character.appearances} title="appearences"/>
        <CharDetail  detail={character.father} title="father"/>
        <CharDetail  detail={character.siblings} title="siblings"/>
        <CharDetail  detail={character.titles} title="titles"/>
      </div>
    </div>
  );
};

export default CharacterCardDetail;

//img
//casa
// alianzas
//apariciones
//padre
//descendientes
//titulos