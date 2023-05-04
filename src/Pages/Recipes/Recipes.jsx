import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Recipes = () => {
  const { id } = useParams();

  const recipes = useLoaderData();
  console.log(recipes);
  return (
    <div>
      <h1>Comming Soon Recipes</h1>
    </div>
  );
};

export default Recipes;
