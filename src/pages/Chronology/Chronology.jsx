import axios from "axios";
import { useEffect, useState } from "react";
import "./Chronology.scss"

let charactersArray = []
let charactersPair = []
let charactersOdd = []

const Chronology = () => {

  const [highToLow, setHighToLow] = useState(true)

  const charactersAge = () => {
    axios("https://api.got.show/api/show/characters/").then((res) =>{
      console.log("log de data:", res.data);
      for (const character of res.data) {
        if (character.age) {
          if (character.age.age) {
            charactersArray.push(character)
          }
        }
      }
      console.log("array ordenado:", charactersArray);
      sortCharacters()
      setHighToLow(false)
    })
  };

  const sortCharacters = () => {
    if (highToLow) {
       charactersArray.sort((a, b) => a.age.age - b.age.age)
    } else {
       charactersArray.sort((a, b) => b.age.age - a.age.age)
    }

    for (let i = 0; i < charactersArray.length; i++) {
      if (i % 2 === 0) {
        charactersPair.push(charactersArray[i])
      } else{
        charactersOdd.push(charactersArray[i])
      }
    }
  }

  const repeat = () => {
    if(highToLow) {
      setHighToLow(false)
      sortCharacters()
    } else {
      setHighToLow(true)
      sortCharacters()
    }

  }
  useEffect(()=> {
    charactersAge()
  }, [])
  
  return (
    <div className="container">
    <button onClick={repeat}> HOLAAA</button>
    <div className="container-left">  
    {charactersPair.map((character) => <div key={character.id} className="container-left__card">
      <p className="container-left__card--age">{character.age.age}</p>
      <p className="container-left__card--name">{character.name}</p>
      <img className="container-left__card--img" src={character.image} alt={character.name}/>
    </div>)}
    </div>
    <div className="container-right">
    {charactersOdd.map((character) => <div key={character.id} className="container-right__card">
      <p className="container-right__card--age">{character.age.age}</p>
      <p className="container-right__card--name">{character.name}</p>
      <img className="container-right__card--img" src={character.image} alt={character.name}/>
    </div>)}
    </div>
    </div>
  );
};

export default Chronology;
