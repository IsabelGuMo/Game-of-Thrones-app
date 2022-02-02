import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./CharacterCard.scss";

const CharacterCard = ({ character }) => {
  return (
    <Link className="character-div" to={generatePath("/characters/:name", { name: character.name })}>
      <figure className="character-div__card">
        <div className="character-div__card--img">
          <img src={character.image} alt={character.name} /> {/* FALTA ARREGLAR EN ONERROR */}
        </div>
        <div className="character-div__card--div">
        <figcaption  className="character-div__card--div-name">{character.name}</figcaption>
        </div>
      </figure>
    </Link>
  );
};
export default CharacterCard;


//https://res.cloudinary.com/ddbvk5mrr/image/upload/v1643814766/Game%20of%20thrones/Not_today_v1grrc.jpg