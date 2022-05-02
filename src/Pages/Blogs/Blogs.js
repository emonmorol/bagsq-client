import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="min-h-[80vh]">
      <h1 className="text-center text-2xl lg:text-4xl uppercase font-extrabold font-[Poppins] my-8">
        Question And Answer
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 px-4 lg:px-20">
        <div className="question-container bg-white px-5 lg:px-10 py-6 lg:py-16 rounded-xl shadow hover:shadow-xl">
          <div className="flex items-center">
            <span className="question-icon mr-3">
              <FontAwesomeIcon icon={faQuestion} />
            </span>
            <span className="lg:text-xl text-base font-bold">
              What is the Difference between javascript and nodejs ?
            </span>
          </div>
          <p className="lg:text-base text-sm">
            11. On the My Items page, the logged-in user will see only his/her
            Items. If the user wants, he/she should be able to cancel/delete any
            item. Ask for a confirmation message before deleting or canceling an
            item. Using browser confirmation dialog is ok. So, you will be able
            to delete an item either from the Manage Inventories page also, from
            the My Items page.
          </p>
        </div>
        <div className="question-container bg-white px-5 lg:px-10 py-6 lg:py-16 rounded-xl shadow hover:shadow-xl">
          <div className="flex items-center">
            <span className="question-icon mr-3">
              <FontAwesomeIcon icon={faQuestion} />
            </span>
            <span className="lg:text-xl text-base font-bold">
              When should you use nodejs and when should you use mongodb ?
            </span>
          </div>
          <p className="lg:text-base text-sm">
            11. On the My Items page, the logged-in user will see only his/her
            Items. If the user wants, he/she should be able to cancel/delete any
            item. Ask for a confirmation message before deleting or canceling an
            item. Using browser confirmation dialog is ok. So, you will be able
            to delete an item either from the Manage Inventories page also, from
            the My Items page.
          </p>
        </div>
        <div className="question-container bg-white px-5 lg:px-10 py-6 lg:py-16 rounded-xl shadow hover:shadow-xl">
          <div className="flex items-center">
            <span className="question-icon mr-3">
              <FontAwesomeIcon icon={faQuestion} />
            </span>
            <span className="lg:text-xl text-base font-bold">
              What is the Differences between sql and nosql databases ?
            </span>
          </div>
          <p className="lg:text-base text-sm">
            11. On the My Items page, the logged-in user will see only his/her
            Items. If the user wants, he/she should be able to cancel/delete any
            item. Ask for a confirmation message before deleting or canceling an
            item. Using browser confirmation dialog is ok. So, you will be able
            to delete an item either from the Manage Inventories page also, from
            the My Items page.
          </p>
        </div>
        <div className="question-container bg-white px-5 lg:px-10 py-6 lg:py-16 rounded-xl shadow hover:shadow-xl">
          <div className="flex items-center">
            <span className="question-icon mr-3">
              <FontAwesomeIcon icon={faQuestion} />
            </span>
            <span className="lg:text-xl text-base font-bold">
              What is the purpose of jwt and how does it work ?
            </span>
          </div>
          <p className="lg:text-base text-sm">
            11. On the My Items page, the logged-in user will see only his/her
            Items. If the user wants, he/she should be able to cancel/delete any
            item. Ask for a confirmation message before deleting or canceling an
            item. Using browser confirmation dialog is ok. So, you will be able
            to delete an item either from the Manage Inventories page also, from
            the My Items page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
