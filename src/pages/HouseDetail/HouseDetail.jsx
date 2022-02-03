import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHouseByName } from '../../api/fetchToApi';
import HouseCardDetail from '../../components/HouseCardDetail/HouseCardDetail';
import NotFound from '../../components/NotFound/NotFound';
import './HouseDetail.scss'


const HouseDetail = () => {
  const [house, setHouse] =useState([])
  let {id} = useParams("house")

  useEffect(() => {
    if (id)
    getHouseByName(id).then((data) => {
        setHouse(data);
        console.log(data);
      });
  }, []);

  
  return (
    <div>
      {house.length !== 0 ? <HouseCardDetail house={house[0]} /> : <NotFound />}
    </div>
    
  );
};

export default HouseDetail;