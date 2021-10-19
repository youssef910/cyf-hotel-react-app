import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const initialState = 0;
  const [order, setOrder] = useState(initialState);
  const orderOne = () => {
    setOrder(currentOrder => currentOrder + 1);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order}{" "}
          <RestaurantButton name="Add" clickToAddToOrder={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
