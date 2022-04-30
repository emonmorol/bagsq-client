import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailedReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    const url = `https://bagsqhike.herokuapp.com/review/${id}`;
    axios(url).then((response) => setReview(response.data));
  });
  return (
    <div className="lg:mx-80 min-h-[80vh] flex justify-center items-center">
      <div className="border pt-6 pb-12 px-10 shadow-md rounded-3xl border-t-8 border-t-blue-400">
        <div className="flex items-center my-5">
          <div className="rounded-full border-8 mr-5 shadow-lg">
            <img className="rounded-full" src={review.image} alt="" />
          </div>
          <div>
            <p className="text-3xl font-bold">{review.name}</p>
            <p className="text-sm">{review.email}</p>
          </div>
        </div>
        <p className="w-[80ch]">{review.context}</p>
      </div>
    </div>
  );
};

export default DetailedReview;
