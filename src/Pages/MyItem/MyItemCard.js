import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const MyItemCard = ({ item, handleDelete }) => {
  const { name, description, image, quantity, price, _id } = item;
  const navigate = useNavigate();

  return (
    <div className="py-5 border rounded-2xl">
      <div className="lg:flex block items-center">
        <div className="lg:w-1/4  px-3 py-4 mx-auto">
          <img src={image} alt="" />
        </div>
        <div className="lg:pr-20">
          <div className="py-4 px-4 bg-white">
            <span className="flex justify-between py-2">
              <span className="block text-lg text-gray-600 font-bold tracking-wide">
                {name}
              </span>
              <span className="font-semibold uppercase text-blue-400">
                ${price}
              </span>
            </span>
            <span className="block text-gray-600 text-sm">
              {description.slice(0, 50)}...
            </span>

            <div className="flex justify-between pt-1">
              <span>
                <span>Rating : </span>{" "}
                <span className="text-blue-400">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfStroke} />
                </span>
              </span>
              <span>Available: {quantity} Pcs.</span>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => navigate(`/inventory/${_id}`)}
              className="w-1/2 mx-4 bg-blue-200 py-2 hover:bg-blue-400"
            >
              Manage
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="w-1/2 mx-4 bg-red-200 py-2 hover:bg-blue-400"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItemCard;
