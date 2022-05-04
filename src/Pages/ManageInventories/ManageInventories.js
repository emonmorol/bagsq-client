import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../Hooks/useProducts";
import TableRow from "./TableRow";
import { Zoom } from "react-reveal";

const ManageInventories = () => {
  const [products, setProducts] = useProducts([]);

  const handleDelete = (id, confirmation) => {
    const url = `https://bagsqhike.herokuapp.com/inventory/${id}`;
    if (confirmation) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainingProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(remainingProducts);
          toast("Item Deletation Complete");
        });
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="px-[10%] my-[2%]">
        <h2 className="text-center my-3">All Inventories</h2>
        <Zoom bottom>
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
                  <TableRow
                    key={product._id}
                    product={product}
                    handleDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </Zoom>
      </div>
      <div className="my-5 mx-auto mb-12">
        <Link to="/addinventory" className="bg-blue-300 py-2 px-10">
          Add Inventory <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;
