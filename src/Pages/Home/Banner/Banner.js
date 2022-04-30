import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-content">
      <div className="banner">
        <div className="inside-banner px-5">
          <h1>Wellcome To BagsQ</h1>
          <Link to="/aboutus">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
