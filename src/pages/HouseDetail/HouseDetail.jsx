import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useParams } from "react-router-dom";
import { getHouseByName } from "../../api/fetchToApi";
import GoHome from "../../components/GoHome/GoHome";
import HouseCardDetail from "../../components/HouseCardDetail/HouseCardDetail";
import Languages from "../../components/Languages/Languages";
import NotFound from "../../components/NotFound/NotFound";
import "./HouseDetail.scss";

const HouseDetail = () => {
  const [house, setHouse] = useState([]);
  let { id } = useParams("house");

  useEffect(() => {
    if (id)
      getHouseByName(id).then((data) => {
        setHouse(data);
      });
  }, []);

  return (
    <div className="houseDetail">
      <div className="houseDetail-components">
        <Link to="/houses">
          <div className="houseDetail-components__back">
            <img
              src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1643987239/Game%20of%20thrones/flechita_uys8jw.svg"
              alt="Arrow icon"
            />
            <p><FormattedMessage
                id="app.back"
                defaultMessage="Edit the files and save to reload"
              /></p>
          </div>
        </Link>
        <div className="houseDetail-components__right">
      <GoHome/>
      <Languages />
      </div>
      </div>
      <div className="houseDetail-container">
        {house.length !== 0 ? (
          <HouseCardDetail house={house[0]} />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default HouseDetail;
