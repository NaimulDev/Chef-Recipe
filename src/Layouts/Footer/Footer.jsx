import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 ">
      <div className="container mx-auto py-8 px-4 flex flex-wrap justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-sm text-gray-500">1234 Main Street, Anytown USA</p>
          <p className="text-sm text-gray-500">(555) 555-5555</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-2">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4 text-center">
        <p className="text-sm text-gray-500">
          © 2023 Chef Recipe Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
