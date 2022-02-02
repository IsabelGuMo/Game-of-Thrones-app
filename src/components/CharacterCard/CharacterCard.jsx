import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./CharacterCard.scss";

const CharacterCard = ({ character }) => {
  return (
    /* <Link
      className="character-div"
      to={generatePath("/characters/:id", { id: character.id })}
    >
      <figure className="container">
        <div className="div-img">
          <img className="image" src={character.image} alt={character.name} />
        </div>
        <div className="overlay">
          <figcaption className="overlay-name">
            {character.name}
          </figcaption>
        </div>
      </figure>
    </Link> */
    <Link className="character-div" to={generatePath("/characters/:id", { id: character.id })}>
      <figure className="character-div__card">
        <div className="character-div__card--img">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="character-div__card--div">
        <figcaption  className="character-div__card--div-name">{character.name}</figcaption>
        </div>
      </figure>
    </Link>
  );
};
export default CharacterCard;
