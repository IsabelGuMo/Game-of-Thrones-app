import axios from "axios";
import { useEffect, useState } from "react";
import GoHome from "../../components/GoHome/GoHome";
import Languages from "../../components/Languages/Languages";
import Navbar from "../../components/Navbar/Navbar";
import NotFound from "../../components/NotFound/NotFound";
import "./Chronology.scss";

let charactersArray = [];
let charactersPair = [];
let charactersOdd = [];

const Chronology = () => {
  const [highToLow, setHighToLow] = useState(true);
  const [isActive, setActive] = useState("true")

  const handeToggle = () => {
    setActive(!isActive)
    repeat()
  }

  const charactersAge = () => {
    charactersArray = [];
    axios("https://api.got.show/api/show/characters/").then((res) => {
      console.log("log de data:", res.data);
      for (const character of res.data) {
        if (character.age) {
          if (character.age.age) {
            charactersArray.push(character);
          }
        }
      }
      console.log("array ordenado:", charactersArray);
      sortCharacters();
      setHighToLow(false);
    });
  };

  const sortCharacters = () => {
    if (highToLow) {
      charactersArray.sort((a, b) => a.age.age - b.age.age);
    } else {
      charactersArray.sort((a, b) => b.age.age - a.age.age);
    }

    charactersPair = [];
    charactersOdd = [];

    for (let i = 0; i < charactersArray.length; i++) {
      if (i % 2 === 0) {
        charactersPair.push(charactersArray[i]);
      } else {
        charactersOdd.push(charactersArray[i]);
      }
    }
  };

  useEffect(() => {
    charactersAge();
  }, []);

  const repeat = () => {
    if (highToLow) {
      setHighToLow(false);
      sortCharacters();
    } else {
      setHighToLow(true);
      sortCharacters();
    }
  };

  return (
    <>
      <div className="chronology-components">
        <GoHome />
        <Languages />
      </div>
      <div className="divSort" >
        <button className="divSort-btn" onClick={handeToggle}>
          <img
            className="divSort-btn__sort"
            src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644065100/Game%20of%20thrones/sort_ncaoex.png"
            alt="sort img"
          />
        </button>
          <img
          className={isActive ? "arrowDown" : "arrowUp"}
            src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644064477/Game%20of%20thrones/flechita_hacia_abajo_fnhc1f.svg"
            alt="arrow pointing down"
          />
      </div>
      <div className="container">
        <div className="container-left">
          {charactersPair.map((character) => (
            <div key={character.id} className="container-left__card">
              <p className="container-left__card--age">{character.age.age}</p>
              <p className="container-left__card--name">{character.name}</p>
              <div className="container-left__card--div">
                <img
                  className="img"
                  src={character.image}
                  alt={character.name}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="container-right">
          {charactersOdd.map((character) => (
            <div key={character.id} className="container-right__card">
              <p className="container-right__card--age">{character.age.age}</p>
              <p className="container-right__card--name">{character.name}</p>
              <div className="container-right__card--div">
                {character.image ? (
                  <img
                    className="img"
                    src={character.image}
                    alt={character.name}
                  />
                ) : (
                  <NotFound />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chronology-navbar">
        <Navbar/>
      </div>
    </>
  );
};

export default Chronology;
