import React, { useEffect, useState } from "react";
import { getCharacters } from "../../api/fetchToApi";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./Characters.scss";
import Search from "./../../components/Searcher/Searcher.jsx";
import GoHome from "../../components/GoHome/GoHome";
import Navbar from "../../components/Navbar/Navbar";
import Languages from "../../components/Languages/Languages";

const Characters = ({ props }) => {
  console.log("esto es props", props);
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
    <div className="characters">
    <div className="characters-components">
      <Search props={props}/>
      <div className="characters-components__right">
      <GoHome/>
      <Languages />
      </div>
    </div>
      <div className="characters-container">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} props={props}/>
        ))}
      </div>
      <div className="characters-navbar">
        <Navbar props={props}/>
      </div>
    </div>
  );
};

export default Characters;
