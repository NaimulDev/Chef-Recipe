import React from "react";

// eslint-disable-next-line react/prop-types
const Recipes = ({ recipe }) => {
  // eslint-disable-next-line react/prop-types
  const { image_url, like, name, rating, thumbnail_url, title, details } =
    recipe;
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        {/* <img src={} alt="Your Image" className="w-full" /> */}
      </div>
      <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
        <h2 className="text-2xl font-bold mb-2">Title</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          felis ac tellus laoreet placerat. Suspendisse vel sapien in justo
          fringilla pulvinar.
        </p>
        <p className="text-gray-700">
          Ut vel elit non elit vulputate fermentum. Sed ac faucibus dolor.
          Nullam vel massa vitae mauris dapibus bibendum eget a velit. Mauris
          malesuada vestibulum efficitur.
        </p>
      </div>
    </div>
  );
};

export default Recipes;
