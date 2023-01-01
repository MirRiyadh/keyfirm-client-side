import React from "react";
import AllServices from "../All Services/AllServices";
import Banner from "../Banner/Banner";
import DisplayService from "../Display-Service/DisplayService";
import Features from "../Features/Features";
import NewsLetter from "../NewsLetter/NewsLetter";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllServices></AllServices>
      <Features></Features>
      <DisplayService></DisplayService>
      <Team></Team>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
