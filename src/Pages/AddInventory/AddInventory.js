import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../fireabase.init";
import bagsq from "../../Images/BagsQ.png";

const AddInventory = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {};

  return (
    <div>
      <form
        className="flex flex-col mx-auto justify-center lg:w-1/3 w-3/4 p-5 my-8 rounded-2xl shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full mt-2 mb-6">
          <img className="w-3/5 mx-auto" src={bagsq} alt="" />
        </div>
        <h2 className="text-center text-2xl font-bold text-blue-400 uppercase mb-4">
          Please Add Your Item
        </h2>

        <label>Enter Your Email</label>
        <input
          type="email"
          value={user?.email}
          className="border py-2 px-5 mb-4 rounded-lg"
          {...register("email", { required: true })}
        />

        <label>Product Name</label>
        <input
          className="border py-2 px-5 mb-4 rounded-lg"
          {...register("name", { required: true })}
        />

        <label>Description</label>
        <textarea
          className="border py-2 px-5 mb-4 rounded-lg"
          {...register("description", { required: true })}
        />

        <label>Supplier Name</label>
        <input
          className="border py-2 px-5 mb-4 rounded-lg"
          {...register("supplier", { required: true })}
        />

        <label>Price</label>
        <input
          className="border py-2 px-5 mb-4 rounded-lg"
          type="number"
          {...register("price", { required: true })}
        />

        <label>Quantity</label>
        <input
          className="border py-2 px-5 mb-4 rounded-lg"
          type="number"
          {...register("quantity", { required: true })}
        />

        <label>Image</label>
        <input
          className="border py-2 px-5 mb-4 rounded-lg"
          {...register("image", { required: true })}
        />

        <input
          className="border py-2 px-5 mb-4 rounded-lg cursor-pointer bg-blue-300"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddInventory;
