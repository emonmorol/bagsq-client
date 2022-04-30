import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const ManageInventories = () => {
  const [products, setProducts] = useProducts([]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are Your Sure? You want To Delete??");
    if (proceed) {
      const url = `https://bagsqhike.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainingProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(remainingProducts);
        });
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="px-[10%] my-[2%]">
        <h2 className="text-center my-3">All Inventories {products.length}</h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-8 py-3  border-x text-center">
                  Product Image
                </th>
                <th scope="col" className="px-6 py-3  border-x text-center">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3  border-x text-center">
                  Price
                </th>
                <th scope="col" className="px-6 py-3  border-x text-center">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3  border-x text-center">
                  Supplier
                </th>
                <th scope="col" className="px-6 py-3  border-x text-center">
                  <span className="sr-only">Control</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-1/12 px-6 py-3 border-x  dark:text-white whitespace-nowrap">
                    <img
                      className="w-1/2 mx-auto"
                      src={product?.image}
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-3 border-x text-center font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {product?.name}
                  </td>
                  <td className="px-6 py-3 border-x text-center">
                    ${product?.price}
                  </td>
                  <td className="px-6 py-3 border-x text-center">
                    {product?.quantity}
                  </td>
                  <td className="px-6 py-3 border-x text-center">
                    {product?.supplier}
                  </td>
                  <td className="px-6 py-3 border-x text-center text-red-500">
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-200 py-2 px-3 text-base rounded-full cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-5 mx-auto mb-12">
        <Link to="/addinventory" className="bg-blue-300 py-2 px-10">
          Add Inventory
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;
