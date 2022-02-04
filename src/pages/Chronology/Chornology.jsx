import axios from "axios";
import { useEffect, useState } from "react";

let charactersArray = []

const Chronology = () => {

  const [hightToLow, setHighToLow] = useState(false)



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
      console.log(sortCharactersLowToHigh())
      sortCharactersLowToHigh()
    })
  };

  /* const charactersSorted() => {
    charactersArray.sort((a, b) => a.age.age - b.age.age)
  } */


 /*  const sortCharactersLowToHigh = () => {
    if () {
       charactersArray.sort((a, b) => a.age.age - b.age.age)
    } else {
       charactersArray.sort((a, b) => b.age.age - a.age.age)
    }
  } */

  useEffect(()=> {
    charactersAge()
    
  }, [])
  
  return (
    <div>
    <button onClick={()=> setHighToLow(!btn)}></button>
      
    </div>
  );
};

export default Chronology;
