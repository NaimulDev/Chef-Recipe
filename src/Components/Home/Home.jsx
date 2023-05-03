import React from "react";
// import { Link } from "react-router-dom";

import SectionTwo from "./SectionTwo";
import Banner from "./Banner";
import SectionOne from "./SectionOne";

// import cover2 from "./assets/images/banner/banner-1.jpg";
// import cover3 from "./assets/images/banner/banner-1.jpg";

const Home = () => {
  return (
    <>
      <Banner />
      <SectionOne />
      <SectionTwo />
    </>
  );
};

export default Home;
