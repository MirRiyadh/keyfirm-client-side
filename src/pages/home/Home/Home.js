import React from "react";
import AllServices from "../All Services/AllServices";
import Banner from "../Banner/Banner";
import DisplayService from "../Display-Service/DisplayService";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllServices></AllServices>
      <Features></Features>
      <DisplayService></DisplayService>
    </div>
  );
};

export default Home;
