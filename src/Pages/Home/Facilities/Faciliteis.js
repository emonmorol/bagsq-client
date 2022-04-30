import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import truck from "../../../Images/truck.jpg";

const Faciliteis = () => {
  return (
    <div className="bg-white w-full flex justify-center items-center py-24">
      <div className="w-[60ch]">
        <h2 className="font[Nunito] text-3xl font-semibold my-5 text-blue-900">
          At <span className="text-blue-500">BagsQ</span>, we provide a unique
          solution for warehousing space for business and consumers related to
          bags
        </h2>
        <p className="my-5">
          Get great deals every day at BagsQ. Shop online and browse through our
          massive range of bags, with great deals on hiking, school, formal, and
          so much more type of bags. <br />
          <br /> We are Now Bangladesh's biggest warehouse for great bags at low
          prices. Look no further than The BagsQ: where everyone gets a bargain!
        </p>
        <Link
          className="bg-blue-100 py-1 px-4 rounded-md"
          to="/manageInventories"
        >
          See All Inventories <FontAwesomeIcon icon={faArrowRight} />{" "}
        </Link>
      </div>
      <div>
        <img src={truck} alt="" />
      </div>
    </div>
  );
};

export default Faciliteis;
