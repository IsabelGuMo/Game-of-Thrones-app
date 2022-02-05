import React from "react";
import Languages from "../../components/Languages/Languages";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home-components">
        <Languages />
      </div>
      <div className="home-div">
        <img className="home-div__img" src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644068811/Game%20of%20thrones/game_of_thrones_hnltvf.png" alt="Throne img"/>
        <h1 className="home-div__title">Game of Thrones</h1>
      </div>
      <div className="home-navbar">
        <Navbar/>
      </div>
    </div>
  );
};

export default Home;
