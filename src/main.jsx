import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blog from "./Pages/Blog/Blog";
import Main from "./Components/Main/Main";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import AuthProvider from "./Components/providers/AuthProvider";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Service from "./Pages/Service/Service";
import PrivateRoute from "./Routes/PrivateRoute";
import Recipes from "./Pages/Recipes/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/chef"),
      },
      {
        path: "/chef/:id",
        element: <Recipes />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
