// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

import SectionTwo from "./SectionTwo";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import { useLoaderData } from "react-router-dom";
import ChefMaster from "./chefMaster";
import useTitle from "../../useTitle";

// import cover2 from "./assets/images/banner/banner-1.jpg";
// import cover3 from "./assets/images/banner/banner-1.jpg";

const Home = () => {
  const chefData = useLoaderData();
  useTitle("Home");
  return (
    <>
      <Banner />
      <SectionTwo />
      <SectionOne />
      <h1 className="text-center text-5xl font-bold">Our Master Chefs</h1>
      <div className="my-container">
        <div className=" product-container">
          {chefData.map((chef) => (
            <ChefMaster key={chef.id} chef={chef}></ChefMaster>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
