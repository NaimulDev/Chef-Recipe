// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

import SectionTwo from "./SectionTwo";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import { useLoaderData } from "react-router-dom";
import ChefMaster from "./chefMaster";

// import cover2 from "./assets/images/banner/banner-1.jpg";
// import cover3 from "./assets/images/banner/banner-1.jpg";

const Home = () => {
  const chefData = useLoaderData();
  console.log(chefData);
  // useEffect(() => {
  //   fetch("http://localhost:5000/chef")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <>
      <Banner />
      <SectionTwo />
      <SectionOne />
      <h1 className="text-center text-5xl font-bold">Our Master Chefs</h1>
      <div className=" grid grid-cols-3 justify-center mx-auto">
        {chefData.map((chef) => (
          <ChefMaster key={chef.id} chef={chef}></ChefMaster>
        ))}
      </div>
    </>
  );
};

export default Home;
