import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import strength from "../../../Images/strength.png";
import "./Strength.css";

const Strength = () => {
  return (
    <div className="bg-white w-full flex justify-center items-center py-14">
      <div className="w-1/3">
        <img src={strength} alt="" />
      </div>
      <div className="w-[60ch]">
        <h2 className="font-[Nunito] text-4xl font-extrabold my-5 text-blue-900">
          Our <span className="text-blue-500">Strength</span>
        </h2>
        <p className="my-2">
          Get great deals every day at BagsQ. Shop online and browse through our
          massive range of bags, with great deals on hiking, school, formal, and
          so much more type of bags. <br />
        </p>
        <br />
        <div className="line-container flex items-center">
          <div className="check-content">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <p>Donec cursus magna quis aliquam malesuada.</p>
        </div>
        <div className="line-container flex items-center">
          <div className="check-content">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <p>Donec cursus magna quis aliquam malesuada.</p>
        </div>
        <div className="line-container flex items-center">
          <div className="check-content">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <p>Donec cursus magna quis aliquam malesuada.</p>
        </div>
        <div className="line-container flex items-center">
          <div className="check-content">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <p>Donec cursus magna quis aliquam malesuada.</p>
        </div>
        <div className="line-container flex items-center">
          <div className="check-content">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <p>Donec cursus magna quis aliquam malesuada.</p>
        </div>
      </div>
    </div>
  );
};

export default Strength;
