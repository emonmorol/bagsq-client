import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../fireabase.init";
import MyItemCard from "./MyItemCard";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myInventory, setMyInventory] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/myitem?email=${user?.email}`;
    axios(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("authorizationToken")}`,
      },
    }).then((response) => {
      setMyInventory(response.data);
    });
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are Your Sure? You want To Delete??");
    if (proceed) {
      const url = `https://bagsqhike.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainingProducts = myInventory.filter(
            (product) => product._id !== id
          );
          setMyInventory(remainingProducts);
        });
    }
  };

  return (
    <div className="py-14 flex flex-col justify-center min-h-screen">
      <h1 className="text-center">Products That You've Added</h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:px-28 pt-5">
        {myInventory.map((item) => (
          <MyItemCard key={item._id} item={item} handleDelete={handleDelete} />
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

export default MyItem;
