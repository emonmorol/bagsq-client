import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductInventory = () => {
  const { id } = useParams();
  // const [products] = useProducts();
  const [product, setProduct] = useState({});
  const [newQuantity, setNewQuantity] = useState(0);

  //finding  product using id
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data.quantity);
        setNewQuantity(data.quantity);
      });
  }, [id]);

  //
  const handleUpdateStock = (event) => {
    event.preventDefault();
    const stock = event.target.stock.value;
    const updatedQuantity = +newQuantity + parseInt(stock);
    setNewQuantity(updatedQuantity);
    const url = `http://localhost:5000/update/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ updatedQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  const handleDelivered = () => {
    const updatedQuantity = newQuantity - 1;
    setNewQuantity(updatedQuantity);
    const url = `http://localhost:5000/update/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ updatedQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  // useEffect(() => {
  //   const url = `http://localhost:5000/update/${id}`;
  //   fetch(url, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({ newQuantity }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {});
  // }, [newQuantity]);
  return (
    <div className="flex justify-center items-center my-20">
      <div>
        <img src={product?.image} alt="" />
      </div>
      <div className="py-4 px-4 bg-white">
        <div>
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
            Available: <span className="font-bold">{newQuantity}</span> Pcs.
          </span>
          <p className="my-2">Supplier : {product?.supplier}</p>
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
        <form onSubmit={handleUpdateStock} className="flex items-center">
          <div className="relative my-4">
            <input
              type="number"
              name="stock"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Update Stock
            </label>
          </div>
          <button
            type="submit"
            className="py-3 px-4 bg-gray-500 font-semibold uppercase text-white"
          >
            Update
          </button>
        </form>
        <div>
          <button
            onClick={handleDelivered}
            className="bg-blue-300 py-1 px-10 my-10 rounded mr-5"
          >
            delivered
          </button>
          <Link
            className="bg-blue-300 py-1 px-10 my-10 rounded"
            to="/manageInventories"
          >
            Manage Inventories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInventory;
