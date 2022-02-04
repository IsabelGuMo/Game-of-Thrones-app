import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCharacterById } from '../../api/fetchToApi';
import CharacterCardDetail from '../../components/CharacterCardDetail/CharacterCardDetail';
import GoHome from '../../components/GoHome/GoHome';
import NotFound from '../../components/NotFound/NotFound';
import './CharacterDetail.scss'


const CharacterDetail = () => {
  const [character, setCharacter] =useState([])
  let {id} = useParams("name")

  useEffect(() => {
    if (id)
      getCharacterById(id).then((data) => {
        setCharacter(data);
      });
  }, []);

  
  return (
    <div>
    <Link to="/characters"><img src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1643987239/Game%20of%20thrones/flechita_uys8jw.svg" alt="Arrow icon"/><p>Volver</p></Link>
    <GoHome/>
      {character.length !== 0 ? <CharacterCardDetail character={character} /> : <NotFound />}
    </div>
    
  );
};

export default CharacterDetail;