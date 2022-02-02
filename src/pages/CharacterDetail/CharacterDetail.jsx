import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../../api/fetchToApi';
import CharacterCardDetail from '../../components/CharacterCardDetail/CharacterCardDetail';
import NotFound from '../../components/NotFound/NotFound';
import './CharacterDetail.scss'


const CharacterDetail = () => {
  const [character, setCharacter] =useState([])
  let {id} = useParams("name")

  useEffect(() => {
    if (id)
      getCharacterById(id).then((data) => {
        setCharacter(data);
        console.log(data);
      });
  }, []);

  
  return (
    <div>
      {character.length !== 0 ? <CharacterCardDetail character={character} /> : <NotFound />}
    </div>
  );
};

export default CharacterDetail;