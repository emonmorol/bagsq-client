import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const ProductInventory = () => {
  const { id } = useParams();
  const [products] = useProducts();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const product = products.find((e) => e._id === id);
    setProduct(product);
  }, [products]);
  console.log(product);
  return (
    <div className="flex justify-center items-center my-20">
      <div>
        <img src={product?.image} alt="" />
      </div>
      <div className="py-4 px-4 bg-white">
        <span className="flex justify-between py-2">
          <span className="block text-3xl text-gray-600 font-bold tracking-wide">
            {product?.name}
          </span>
        </span>
        <span className="block text-gray-600 text-base my-5 w-[60ch]">
          {product?.description}
        </span>

        <p className="font-extrabold text-3xl uppercase text-blue-400 my-4">
          Price : ${product?.price}
        </p>
        <span className="text-2xl">
          Available: <span className="font-bold">{product?.quantity}</span> Pcs.
        </span>
        <p className="my-2">Product Id : {product?._id}</p>
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
      </div>
    </div>
  );
};

export default ProductInventory;
