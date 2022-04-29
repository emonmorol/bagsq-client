import React from "react";
import useProducts from "../../../Hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [products] = useProducts([]);

  return (
    <div className="py-14">
      <h1 className="text-center">Our Products {products.length}</h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 lg:px-28 py-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
