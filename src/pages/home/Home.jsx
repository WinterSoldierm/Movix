import React from "react";
import "./home.scss";
import HeroBanner from "./herobanner/HeroBanner";
import Trending from "./trending/Trending";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
    </div>
  );
};

export default Home;
