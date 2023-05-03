import React from "react";
import chef from "../../assets/images/chef/chef.png";

const SectionOne = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between px-4 md:px-24 py-8 md:py-12">
      {/* Image on the left side */}
      <div className="md:w-1/3 mb-8 md:mb-0">
        <img src={chef} alt="Placeholder" className="w-full" />
      </div>

      {/* Title, text, and four small images on the right side */}
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Who We Are ?
        </h1>
        <p className="text-lg md:text-xl text-center mb-8">
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
          accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
          odio. Sed non mauris vitae erat consequat auctor eu in elit. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
          dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
          imperdiet nisi.
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          What We Do
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          {/* Four small images */}
          <img
            src="https://i.ibb.co/R7MKDsg/pexels-kristina-paukshtite-2261999.jpg"
            alt="Placeholder"
            className="w-1/2 md:w-1/4 mb-4 md:mb-0 mx-4"
          />
          <img
            src="https://i.ibb.co/cc6zQRx/pexels-klaus-nielsen-6294442.jpg"
            alt="Placeholder"
            className="w-1/2 md:w-1/4 mb-4 md:mb-0 mx-4"
          />
          <img
            src="https://i.ibb.co/C0HDSND/pexels-shvets-production-7525163.jpg"
            alt="Placeholder"
            className="w-1/2 md:w-1/4 mb-4 md:mb-0 mx-4"
          />
          <img
            src="https://i.ibb.co/xfxwzrY/pexels-katerina-holmes-5908059.jpg"
            alt="Placeholder"
            className="w-1/2 md:w-1/4 mb-4 md:mb-0 mx-4"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
