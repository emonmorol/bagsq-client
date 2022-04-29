import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useProducts from "../../Hooks/useProducts";

const ManageInventories = () => {
  const [products] = useProducts([]);

  return (
    <div className="px-[10%] py-[5%]">
      <h2 className="text-center my-3">All Inventories</h2>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-8 py-3  border-x text-center">
                Product Image
              </th>
              <th scope="col" class="px-6 py-3  border-x text-center">
                Product name
              </th>
              <th scope="col" class="px-6 py-3  border-x text-center">
                Price
              </th>
              <th scope="col" class="px-6 py-3  border-x text-center">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3  border-x text-center">
                Supplier
              </th>
              <th scope="col" class="px-6 py-3  border-x text-center">
                <span class="sr-only">Control</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-1/12 px-6 py-3 border-x  dark:text-white whitespace-nowrap">
                    <img
                      className="w-1/2 mx-auto"
                      src={product?.image}
                      alt=""
                    />
                  </td>
                  <td class="px-6 py-3 border-x text-center font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {product?.name}
                  </td>
                  <td class="px-6 py-3 border-x text-center">
                    ${product?.price}
                  </td>
                  <td class="px-6 py-3 border-x text-center">
                    {product?.quantity}
                  </td>
                  <td class="px-6 py-3 border-x text-center">
                    {product?.supplier}
                  </td>
                  <td class="px-6 py-3 border-x text-center text-red-500 cursor-pointer">
                    <button className="bg-red-200 py-2 px-3 text-base rounded-full">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageInventories;
