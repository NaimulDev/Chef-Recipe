import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import "@smastrom/react-rating/style.css";
import { ToastContainer } from "react-toast";

// eslint-disable-next-line react/prop-types
const Recipes = ({ recipe }) => {
  // eslint-disable-next-line react/prop-types
  const { image, like, name, rating, details } = recipe;

  const [disable, setDisable] = useState(false);
  const [ratting, setRatting] = useState(3);

  const handleToast = () => {
    toast("Added");
    alert("added");
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
          <div className="text-yellow-500 mr-2">
            <Rating
              style={{ maxWidth: 180 }}
              value={ratting}
              onChange={setRatting}
            />
          </div>
          <div>
            <span className="text-gray-700 text-sm">{like}</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className=" btn-primary w-full" onClick={handleToast}>
          Favorite Food
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Recipes;
