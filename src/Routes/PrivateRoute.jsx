import React, { useContext } from "react";
import { useState, CSSProperties } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Components/providers/AuthProvider";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  let [color, setColor] = useState("#ffffff");
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="sweet-loading">
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signup" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
