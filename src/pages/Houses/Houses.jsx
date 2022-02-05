import React, { useEffect, useState } from 'react';
import { getHouses } from '../../api/fetchToApi';
import HouseCard from '../../components/HouseCard/HouseCard';
import "./Houses.scss"
import Search from "./../../components/Searcher/Searcher.jsx";
import Navbar from '../../components/Navbar/Navbar';
import GoHome from '../../components/GoHome/GoHome';
import Languages from '../../components/Languages/Languages';

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
    <div className='houses'>
    <div className='houses-components'>
      <Search props={props}/>
      <div className="houses-components__right">
      <GoHome/>
      <Languages />
      </div>
    </div>
      <div className="houses-container">
      {houses.map((house) => (
      <HouseCard key={house.name} house={house} props={props}/>
      ))}
      </div>
      <div className="houses-navbar">
        <Navbar props={props}/>
      </div>
    </div>
  );
};

export default Houses;
