import React from "react";

const RestaurantButton = props => {
  const { name, clickToAddToOrder } = props;
  return (
    <button className="btn btn-success" onClick={clickToAddToOrder}>
      {name}
    </button>
  );
};

export default RestaurantButton;
