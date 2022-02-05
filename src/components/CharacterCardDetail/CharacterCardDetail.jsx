import React from "react";
import Detail from "../Detail/Detail";
import "./CharacterCardDetail.scss";
import NotFound from "../NotFound/NotFound";
import CharHouseDetail from "./CharHouseDetail/CharHouseDetail";

const CharacterCardDetail = ({ character }) => {
  return (
    <div className="detailContainer">
      <figure className="figure">
        <div className="figure-div">
          {character.image ==="https://vignette.wikia.nocookie.net/gameofthrones/images/9/96/Oberyn-Martell-house-martell-37118334-2832-4256.jpg/revision/latest/scale-to-width-down/333?cb=20150815065729" ||character.image ==="https://vignette.wikia.nocookie.net/gameofthrones/images/1/1b/Grenn.jpg/revision/latest?cb=20180702193920" ? (<NotFound />) : character.image ? (<img src={character.image} alt={character.name} />) : (<NotFound />)}</div>
        <figcaption className="figure-caption">{character.name}</figcaption>
      </figure>
      <div className="div-details">
        <CharHouseDetail detail={character.house} title="house" />
        <Detail detail={character.allegiances} title="allegiances" />
        <Detail detail={character.appearances} title="appearences" />
        <Detail detail={character.father} title="father" />
        <Detail detail={character.siblings} title="siblings" />
        <Detail detail={character.titles} title="titles" />
      </div>
    </div>
  );
};

export default CharacterCardDetail;
