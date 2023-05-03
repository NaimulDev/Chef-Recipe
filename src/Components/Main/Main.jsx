import React from "react";
import Header from "../../Layouts/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Layouts/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
