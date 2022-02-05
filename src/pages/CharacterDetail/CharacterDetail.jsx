import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useParams } from "react-router-dom";
import { getCharacterById } from "../../api/fetchToApi";
import CharacterCardDetail from "../../components/CharacterCardDetail/CharacterCardDetail";
import GoHome from "../../components/GoHome/GoHome";
import Languages from "../../components/Languages/Languages";
import NotFound from "../../components/NotFound/NotFound";
import "./CharacterDetail.scss";

const CharacterDetail = () => {
  const [character, setCharacter] = useState([]);
  let { id } = useParams("name");

  useEffect(() => {
    if (id)
      getCharacterById(id).then((data) => {
        setCharacter(data);
      });
  }, []);

  return (
    <div className="characterDetail">
      <div className="characterDetail-components">
        <Link to="/characters">
          <div className="characterDetail-components__back">
            <img src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1643987239/Game%20of%20thrones/flechita_uys8jw.svg" alt="Arrow icon"/>
            <p>
              <FormattedMessage id="app.back" defaultMessage="Edit the files and save to reload"/>
            </p>
          </div>
        </Link>
        <div className="characterDetail-components__right">
      <GoHome/>
      <Languages />
      </div>
      </div>
      <div className="characterDetail-container">
        {character.length !== 0 ? (
          <CharacterCardDetail character={character} />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default CharacterDetail;
