import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  console.log(product);
  const { name, description, image, quantity, supplier } = product;
  return (
    <div className="py-5">
      <div className="border bg-white  max-w-sm flex justify-center items-center  mx-auto hover:shadow-lg">
        <div>
          <div className="w-3/4 px-3 py-4 mx-auto">
            <img src={image} alt="" />
          </div>
          <div className="py-4 px-4 bg-white">
            <span className="block text-lg text-gray-800 font-bold tracking-wide">
              {name}
            </span>
            <span className="block text-gray-600 text-sm">{description}</span>
            <div className="flex justify-between pt-3">
              <span>Supplier:{supplier}</span>
              <span>Available: {quantity} Pcs.</span>
            </div>
          </div>
          <button className="w-full bg-blue-200 py-2 hover:bg-blue-400">
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
