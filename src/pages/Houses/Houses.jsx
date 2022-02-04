import React, { useEffect, useState } from 'react';
import { getHouses } from '../../api/fetchToApi';
import HouseCard from '../../components/HouseCard/HouseCard';
import "./Houses.scss"
import Search from "./../../components/Searcher/Searcher.jsx";

const Houses = ({props}) => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getHouses().then((data) => {
      const filteredHouses = data.filter((item) => {
        return item.name.toLowerCase().includes(props.search);
      });
      setHouses(filteredHouses);
    });
  }, [props.search]);

  return (
    <div>
      <h2>Houses</h2>
      <Search props={props}/>
      <div className="houses-container">
      {houses.map((house) => (
      <HouseCard key={house.name} house={house}/>
      ))}
      </div>
    </div>
  );
};

export default Houses;
