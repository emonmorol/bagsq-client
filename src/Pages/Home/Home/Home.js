import React from "react";
import Banner from "../Banner/Banner";
import Benefits from "../Benefites/Benefits";
import CountOurNumbers from "../CountOurNumbers/CountOurNumbers";
import Faciliteis from "../Facilities/Faciliteis";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Strength from "../Strength/Strength";

const Home = () => {
  return (
    <>
      <Banner />
      <Faciliteis />
      <Products />
      <Strength />
      <CountOurNumbers />
      <Benefits />
      <Reviews />
    </>
  );
};

export default Home;
