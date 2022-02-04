import React, { useEffect, useState } from "react";
import { getCharacters } from "../../api/fetchToApi";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./Characters.scss";
import Search from "./../../components/Searcher/Searcher.jsx";
import GoHome from "../../components/GoHome/GoHome";

const Characters = ({ props }) => {
  console.log(props);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => {
      const filteredCharacters = data.filter((item) => {
        return item.name.toLowerCase().includes(props.search);
      });
      console.log(filteredCharacters);
      setCharacters(filteredCharacters);
    });
  }, [props.search]);

  return (
    <div>
      <h2>Characters</h2>
      <Search props={props}/>
      <GoHome/>
      <div className="characters-container">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;