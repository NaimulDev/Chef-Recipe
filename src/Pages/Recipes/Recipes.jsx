import React from "react";

// eslint-disable-next-line react/prop-types
const Recipes = ({ recipe }) => {
  // eslint-disable-next-line react/prop-types
  const { image, like, name, rating, title, details } = recipe;

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-4">{details}</p>
        <div className="flex items-center">
          <div className="text-yellow-500 mr-2"></div>
          <span className="text-gray-700 text-sm">{like}</span>
          <button className="ml-auto focus:outline-none">loved</button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
