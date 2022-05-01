import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleReviews from "../SingleReview/SingleReviews";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios("https://bagsqhike.herokuapp.com/reviews").then((response) =>
      setReviews(response.data)
    );
  }, []);
  return (
    <div id="reviews" className="review-container">
      <h2 className="text-center text-3xl font-extrabold">What People say</h2>
      <h3 className="text-center text-3xl font-extrabold text-blue-400">
        About Us
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-5 lg:px-36 my-10">
        {reviews.map((review) => (
          <SingleReviews key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
