import React from "react";
import Detail from "../Detail/Detail";
import "./HouseCardDetail.scss";
import NotFoundShield from "../NotFound/NotFoundShield";
import moment from "moment";


const houseShield = [
    "https://vignette.wikia.nocookie.net/gameofthrones/images/0/08/House_Amber.png/revision/latest/scale-to-width-down/350?cb=20190125210736",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/6/68/Blackmont_heraldry_GOT_exhibition.jpg/revision/latest/scale-to-width-down/350?cb=20150503183457",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/2/23/BotleyHeraldry.jpg/revision/latest?cb=20150225172555",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/9/98/House_Frost.png/revision/latest/scale-to-width-down/350?cb=20190124224907",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/8/82/House_Greenwood.png/revision/latest/scale-to-width-down/350?cb=20190124224857",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/0/0f/House_Bardo.png/revision/latest/scale-to-width-down/343?cb=20160430143001",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/5/50/Lothston_sigil.png/revision/latest?cb=20140623185915",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/f/f7/Manwoody.jpg/revision/latest/scale-to-width-down/350?cb=20150503182300",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d2/Qoherys_sigil.png/revision/latest?cb=20140626211515",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/a/ab/Towers_sigil.png/revision/latest?cb=20140626232200",
    "https://vignette.wikia.nocookie.net/gameofthrones/images/5/5c/House_Towers_North.png/revision/latest?cb=20190125205248",
  ];

const HouseCardDetail = ({ house }) => {
  return (
    <div className="detailContainer">
      <figure className="figure">
        <div className="figure-div">
        {houseShield.includes(house.logoURL) ? (<NotFoundShield />) : house.logoURL ? (<img src={house.logoURL} alt={house.name} />) : (<NotFoundShield />)}
        </div>
        <figcaption className="figure-caption">{house.name}</figcaption>
      </figure>
      <div className="div-details">
        <Detail detail={house.sigil} title="sigil" />
        <Detail detail={house.seat} title="seat" />
        <Detail detail={house.region} title="region" />
        <Detail detail={house.allegiance} title="allegiance" />
        <Detail detail={house.religion} title="religion" />
        <Detail detail={moment(house.createdAt).format('L')} title="fundation" />
      </div>
    </div>
  );
};

export default HouseCardDetail;