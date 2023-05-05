import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import "@smastrom/react-rating/style.css";

import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Toaster, toast } from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const Recipes = ({ recipe }) => {
  // eslint-disable-next-line react/prop-types
  const { image, like, name, rating, details } = recipe;

  const [disable, setDisable] = useState(false);
  const [ratting, setRatting] = useState(3);

  const handleToast = () => {
    toast.success("Food Added..!");
    setDisable(true);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={name} className="w-full h-72 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Name: {name}</h3>
        <p className="text-gray-700 text-base mb-4">
          <span className="underline">Food Details:</span> {details}
        </p>
        <hr />
        <div className="flex items-center mt-2 justify-between">
          <div className="text-yellow-500 mr-2 inline-flex items-center">
            <Rating
              style={{ maxWidth: 180 }}
              value={ratting}
              onChange={setRatting}
            />
            <span className="text-xl">{rating}</span>
          </div>

          <div className=" inline-flex">
            <IconContext.Provider
              value={{ color: "red", className: "global-class-name" }}
            >
              <div>
                <FaHeart />{" "}
              </div>
            </IconContext.Provider>
            <span className="text-gray-700 text-sm ml-2"> {like}</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className=" btn-primary w-full"
          onClick={handleToast}
          disabled={disable}
        >
          Favorite Food
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default Recipes;
