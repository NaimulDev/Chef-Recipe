import React from "react";

// eslint-disable-next-line react/prop-types
const ChefMaster = ({ chef }) => {
  // eslint-disable-next-line react/prop-types
  const { name, image, experian, like } = chef;

  return (
    <>
      <div className="justify-center items-center text-center">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{experian}</p>
          <p>{like}</p>
        </div>
      </div>
    </>
  );
};

export default ChefMaster;
