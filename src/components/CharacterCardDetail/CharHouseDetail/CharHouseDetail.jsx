import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHouseByName } from "../../../api/fetchToApi";
import NotFoundShield from "../../NotFound/NotFoundShield";
import "./CharHouseDetail.scss";

const CharHouseDetail = ({ detail }) => {
  const [house, setHouse] = useState([]);
  useEffect(() => {
    if (detail)
      getHouseByName(detail).then((data) => {
        setHouse(data[0]);
        console.log(data[0]);
      });
  }, []);
  return (
    <div className="div-house">
        <h4 className="div-house__title">House</h4>
        <div className="div-house__container">
          {typeof house == "undefined" ? <p>None</p>: (house.logoURL ?  <Link to={"/houses/" + house.name}><img src={house.logoURL} alt={house.name}/> </Link> : <NotFoundShield />)}
        </div>
    </div>
  );
};

export default CharHouseDetail;
