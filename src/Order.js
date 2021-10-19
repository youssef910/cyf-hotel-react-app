import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const { orderType } = props;
  const initialState = 0;
  const [order, setOrder] = useState(initialState);
  const orderOne = () => {
    setOrder(currentOrder => currentOrder + 1);
  };
  return (
    <li>
      {orderType}: {order}{" "}
      <RestaurantButton name="Add" clickToAddToOrder={orderOne} />
    </li>
  );
};

export default Order;
