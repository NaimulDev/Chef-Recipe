import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Recipes from "./Recipes";
import "./chef-recipe.css";

const ChefRecipes = () => {
  const { id } = useParams();

  const recipes = useLoaderData();
  console.log(recipes[0].thumbnail);
  const chef = recipes[0];
  console.log(chef);

  return (
    <div>
      <div className=" text-center ">
        <h1 className="text-3xl font-bold">Chef Recipes</h1>

        <Link to="/" className="text-teal-300">
          Back
        </Link>
      </div>
      <section className="px-4 py-8 md:flex md:justify-between md:items-center bg-gray-100">
        <div className="md:w-1/2 md:mr-8">
          <img
            src={chef.thumbnail}
            alt="Chef"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Chef John Doe</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">Pasta alla Vodka</li>
            <li className="text-lg mb-2">Grilled Salmon</li>
            <li className="text-lg">Tiramisu</li>
          </ul>
          <span className="text-sm font-medium">Mediterranean cuisine</span>
          <h3 className="text-lg font-bold mb-2">Recipes</h3>
          <ul className="list-disc list-inside">
            <li className="text-sm font-medium">Penne alla Vodka</li>
            <li className="text-sm font-medium">Coq au Vin</li>
            <li className="text-sm font-medium">Greek Salad</li>
          </ul>
        </div>
      </section>
      <section className="px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Recipes key={recipe._id} recipe={recipe}></Recipes>
        ))}
      </section>
    </div>
  );
};

export default ChefRecipes;
