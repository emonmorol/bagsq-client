import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-content">
      <div className="banner">
        <div className="inside-banner">
          <h1>Wellcome To BagsQ</h1>
          {/* <p>
            Your orders are sent to our warehouses, where inventory is picked,
            packed, and shipped to your customers within 24 hrs...
          </p> */}
          <Link to="/aboutus">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
