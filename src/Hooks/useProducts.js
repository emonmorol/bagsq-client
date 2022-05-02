import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://bagsqhike.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return [products, setProducts];
};

export default useProducts;
