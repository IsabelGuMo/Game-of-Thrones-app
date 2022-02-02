import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../api/fetchToApi';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import "./Characters.scss"

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  console.log("Characters:", characters);

  return (
    <div>
      <h2>Characters</h2>
      <div className="characters-container">
      {characters.map((character) => (
      <CharacterCard key={character.id} character={character}/>
      ))}
      </div>
    </div>
  );
};

export default Characters;
