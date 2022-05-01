import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import benefits from "../../../Images/benefits.png";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="bg-white w-full flex justify-center items-center py-14 mb-10">
      <div className="w-[60ch]">
        <h2 className="font-[Nunito] text-4xl font-extrabold my-5 text-blue-900">
          Customer <span className="text-blue-500">Benefits</span>
        </h2>
        <p className="my-5">
          Our objective is to Reduce our clients overall Logistics Cost and
          Increase their Customer Order Servicability <br />
          <br />
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="strength-option shadow hover:shadow-lg transition-all duration-300">
            <p className="strength-icon">
              <FontAwesomeIcon icon={faUserMd} />
            </p>
            <h3 className="font-bold text-md my-2">PROFESSIONAL STAFF</h3>
            <p className="text-xs leading-4">
              Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
            </p>
          </div>
          <div className="strength-option shadow hover:shadow-lg transition-all duration-300">
            <p className="strength-icon">
              <FontAwesomeIcon icon={faUserMd} />
            </p>
            <h3 className="font-bold text-md my-2">
              DISTRIBUTION AND DELIVERY
            </h3>
            <p className="text-xs leading-4">
              Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
            </p>
          </div>
          <div className="strength-option shadow hover:shadow-lg transition-all duration-300">
            <p className="strength-icon">
              <FontAwesomeIcon icon={faUserMd} />
            </p>
            <h3 className="font-bold text-md my-2">EFFECTIVE USE</h3>
            <p className="text-xs leading-4">
              Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
            </p>
          </div>
          <div className="strength-option shadow hover:shadow-lg transition-all duration-300">
            <p className="strength-icon">
              <FontAwesomeIcon icon={faUserMd} />
            </p>
            <h3 className="font-bold text-md my-2">CONTINOUS FOCUS</h3>
            <p className="text-xs leading-4">
              Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <img src={benefits} alt="" />
      </div>
    </div>
  );
};

export default Benefits;
