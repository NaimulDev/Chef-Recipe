import React from "react";

import cover1 from "../../assets/images/banner/banner-1.jpg";

const Banner = () => {
  return (
    <div className="relative h-screen">
      <img
        src={cover1}
        alt=""
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-70 z-10" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20">
        <h1 className="text-3xl md:text-6xl text-white font-bold text-center">
          Welcome to My Website
        </h1>
        <p className="text-lg md:text-2xl text-white mt-4 text-center">
          Discover the latest news, stories, and insights about your favorite
          topics.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full mt-8">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
