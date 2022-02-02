import React from "react";
import { Link } from "react-router-dom";
import CharDetail from "./CharDetail/CharDetail";
import "./CharacterCardDetail.scss";

const CharacterCardDetail = ({ character }) => {
  return (
    <div>
      <Link to="/characters">← Go back to characters</Link>
      <figure className="figure">
        <div className="figure-div">
          <img className="figure-div__img" src={character.image} alt={character.name}/>
        </div>
        <figcaption className="figure-caption">{character.name}</figcaption>
      </figure>
      <div className="div-details">
        <CharDetail detail={character.allegiances} title="House" />
        <CharDetail detail={character.allegiances} title="allegiances" />
        <CharDetail detail={character.appearances} title="appearences" />
        <CharDetail detail={character.father} title="father" />
        <CharDetail detail={character.siblings} title="siblings" />
        <CharDetail detail={character.titles} title="titles" />
      </div>
    </div>
  );
};

export default CharacterCardDetail;
