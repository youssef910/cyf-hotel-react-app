import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul
        className="card-deck"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          width: "100%",
          marginLeft: "unset"
        }}
      >
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;
