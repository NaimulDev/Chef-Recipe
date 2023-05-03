import React from "react";
import sweets from "../../assets/images/foods/sweets.jpg";
import burgers from "../../assets/images/foods/burger.jpg";
import drinks from "../../assets/images/foods/drinks.jpg";
import pizza from "../../assets/images/foods/pizza.jpg";

const SectionTwo = () => {
  return (
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
  );
};

export default SectionTwo;
