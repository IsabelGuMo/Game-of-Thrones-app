import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getHouseByName } from '../../api/fetchToApi';
import GoHome from '../../components/GoHome/GoHome';
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
      });
  }, []);

  
  return (
    <div>
        <Link to="/houses"><img src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1643987239/Game%20of%20thrones/flechita_uys8jw.svg" alt="Arrow icon"/><p>Volver</p></Link>

    <GoHome/>
      {house.length !== 0 ? <HouseCardDetail house={house[0]} /> : <NotFound />}
    </div>
    
  );
};

export default HouseDetail;