import React, { useEffect, useState } from 'react';
import { getHouses } from '../../api/fetchToApi';
import HouseCard from '../../components/HouseCard/HouseCard';
import "./Houses.scss"

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getHouses().then((data) => {
      setHouses(data);
    });
  }, []);

  return (
    <div>
      <h2>Houses</h2>
      <div className="houses-container">
      {houses.map((house) => (
      <HouseCard key={house.name} house={house}/>
      ))}
      </div>
    </div>
  );
};

export default Houses;
