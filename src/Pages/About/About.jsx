import React from "react";
import image1 from "../../assets/images/revew/abt-img1.jpg";
import image2 from "../../assets/images/revew/abt-img2.jpg";
import image3 from "../../assets/images/revew/abt-img3.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between px-4 md:px-12 py-8 md:py-12">
      {/* Text on the left side */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          scelerisque magna ut velit bibendum, non consectetur odio facilisis.
          Suspendisse tristique, odio eu ultrices suscipit, metus lacus
          consequat enim, vel consequat velit quam eget mauris. Suspendisse
          potenti.
        </p>
      </div>

      {/* Three animation images on the right side */}
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </div>
  );
};

export default About;
