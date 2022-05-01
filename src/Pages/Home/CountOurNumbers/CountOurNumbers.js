import {
  faBriefcase,
  faPenNib,
  faPeopleGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./CountOurNumbers.css";

const CountOurNumbers = () => {
  return (
    <div className="count-banner-content">
      <div className="count-banner">
        <div className="count-inside-banner px-5 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="lg:mx-24 text-white flex flex-col justify-center">
              <div className="text-6xl border py-5 px-[1.45rem] rounded-full mx-auto">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="text-center">
                <p className="text-4xl my-2">5628</p>
                <p className="text-2xl my-2 uppercase font-mono">
                  current USERS
                </p>
              </div>
            </div>
            <div className="lg:mx-24 text-white flex flex-col justify-center">
              <div className="text-6xl border py-5 px-[1.45rem] rounded-full mx-auto">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="text-center">
                <p className="text-4xl my-2">528</p>
                <p className="text-2xl my-2 uppercase font-mono">Unique Bags</p>
              </div>
            </div>
            <div className="lg:mx-24 text-white flex flex-col justify-center">
              <div className="text-6xl border py-5 px-[1.45rem] rounded-full mx-auto">
                <FontAwesomeIcon icon={faPenNib} />
              </div>
              <div className="text-center">
                <p className="text-4xl my-2">374</p>
                <p className="text-2xl my-2 uppercase font-mono">Companies</p>
              </div>
            </div>
            <div className="lg:mx-24 text-white flex flex-col justify-center">
              <div className="text-6xl border py-5 px-[1.45rem] rounded-full mx-auto">
                <FontAwesomeIcon icon={faPeopleGroup} />
              </div>
              <div className="text-center">
                <p className="text-4xl my-2">89</p>
                <p className="text-2xl my-2 uppercase font-mono">
                  Team members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountOurNumbers;
