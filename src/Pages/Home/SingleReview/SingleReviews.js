import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SingleReviews = ({ review }) => {
  const { name, email, image, context } = review;
  return (
    <div className="bg-white border-[0.1px] p-5 flex flex-col items-baseline hover:shadow-2xl transition-all duration-300 rounded-3xl">
      <div className="flex items-center">
        <div className="w-1/4">
          <img className="w-full  rounded-2xl " src={image} alt="" />
        </div>
        <div className="flex flex-col pl-3">
          <span className="font-bold">{name}</span>
          <span className="text-xs">{email}</span>
        </div>
      </div>
      <p className="my-5">{context.slice(0, 140)}...</p>
      <Link className="hover:text-blue-500" to="/some">
        <FontAwesomeIcon className="mr-2" icon={faLink} />
        Detailed Review
      </Link>
    </div>
  );
};

export default SingleReviews;
