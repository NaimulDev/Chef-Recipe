import React from "react";
// import { Link } from "react-router-dom";
import cover from "./assets/images/banner.png";
import sweets from "./assets/images/foods/sweets.jpg";
import burgers from "./assets/images/foods/burger.jpg";
import drinks from "./assets/images/foods/drinks.jpg";
import pizza from "./assets/images/foods/pizza.jpg";

const Home = () => {
  return (
    <>
      {/* <div className="flex flex-col md:flex-row justify-center items-center md:pl-24 bg-gray-100">
        <div className="md:w-1/2 px-4 py-8 md:py-16">
          <h4 className="text-gray-600 mt-8 md:mt-0 md:text-xl lg:text-2xl">
            100% Natural
          </h4>
          <h1 className="text-3xl md:text-6xl font-bold mb-4 text-slate-800 mt-4 md:mt-8 lg:mt-16">
            Chocolate Chip Cream
          </h1>
          <p className="mb-8 md:mb-16 text-base md:text-xl">
            Our chocolate chip cookies are made with all natural ingredients and
            baked fresh daily. We use the finest chocolate chips and cream to
            create a deliciously soft and chewy treat thats perfect for any
            occasion.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full">
            Book A Table
          </button>
        </div>

        <div className="md:w-1/2">
          <img
            src={cover}
            alt=""
            className="object-cover w-full h-full md:rounded-r-lg"
          />
        </div>
      </div> */}

      <div className="relative h-screen">
        <img
          src={cover}
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

      <section className="mt-16 md:mt-32">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Recipes By Category
        </h1>
        <p className="mb-8 md:text-lg text-center">
          Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui
          officia deserunmollit anim id est laborum.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:px-7 lg:px-8">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={sweets}
              alt="Sweets"
              className="w-full h-full object-cover cursor-pointer transition duration-300 transform hover:scale-110"
            />
            <div className="absolute text-center bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-3">
              <span className="text-white text-lg font-bold">Sweets</span>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={burgers}
              alt="Burgers"
              className="w-full h-full object-cover cursor-pointer transition duration-300 transform hover:scale-110"
            />
            <div className="absolute text-center bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-3">
              <span className="text-white text-lg font-bold">Burgers</span>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={drinks}
              alt="Drinks"
              className="w-full h-full object-cover cursor-pointer transition duration-300 transform hover:scale-110"
            />
            <div className="absolute text-center bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-3">
              <span className="text-white text-lg font-bold">Drinks</span>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={pizza}
              alt="Pizza"
              className="w-full h-full object-cover cursor-pointer transition duration-300 transform hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-3 text-center">
              <span className="text-white text-lg font-bold ">Pizza</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
