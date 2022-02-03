import React, { useEffect, useState } from "react";
import { getHouseByName } from "../../../api/fetchToApi";
import NotFoundShield from "../../NotFound/NotFoundShield";
import "./CharHouseDetail.scss";

const CharHouseDetail = ({ detail }) => {
  const [house, setHouse] = useState([]);
  console.log("houseeee", house);
  useEffect(() => {
    if (detail)
      getHouseByName(detail).then((data) => {
        setHouse(data[0]);
      });
  }, []);
  return (
    <div className="div-house">
      <h4 className="div-house__title">House</h4>
      <div className="div-house__container">
      {typeof(house)=="undefined" ? <p>None</p> : (house.logoURL ? <img src={house.logoURL} alt={house.name}/> : <NotFoundShield />)}
      </div>
    </div>
  );
};

export default CharHouseDetail;
