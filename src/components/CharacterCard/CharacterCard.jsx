import React, { useState } from "react";
import { Link, generatePath } from "react-router-dom";
import "./CharacterCard.scss";
import NotFound from "../NotFound/NotFound.jsx"

const CharacterCard = ({ character, props }) => {
  return (
    <Link className="character-div" onClick={() => props.setSearch("")} to={generatePath("/characters/:name", { name: character.name })}>
      <figure className="character-div__card">
        <div className="character-div__card--img">
        {character.image === "https://vignette.wikia.nocookie.net/gameofthrones/images/9/96/Oberyn-Martell-house-martell-37118334-2832-4256.jpg/revision/latest/scale-to-width-down/333?cb=20150815065729" || character.image ==="https://vignette.wikia.nocookie.net/gameofthrones/images/1/1b/Grenn.jpg/revision/latest?cb=20180702193920" ? <NotFound /> : (character.image ? <img src={character.image} alt={character.name}/> : <NotFound />)}
        </div>
        <div className="character-div__card--div">
        <figcaption  className="character-div__card--div-name">{character.name}</figcaption>
        </div>
      </figure>
    </Link>
  );
};
export default CharacterCard;