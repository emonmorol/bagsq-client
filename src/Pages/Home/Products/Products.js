import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [products] = useProducts([]);
  const limitedProducts = products.slice(0, 6);

  return (
    <div className="py-14 flex flex-col justify-center min-h-screen">
      <h1 className="text-center">Our Products</h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 px-5 lg:px-28 pt-5">
        {limitedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Link
        className="bg-teal-100 hover:bg-blue-300 py-1 w-1/6 mx-auto my-3 rounded text-center"
        to="/manageInventories"
      >
        Manage Inventories
      </Link>
    </div>
  );
};

export default Products;
