import React from "react";
import "./App.css";

const Header = () => (
  <header className="navbar navbar-dark bg-dark">
    <img
      className="navbar-brand"
      style={{ height: "50px", width: "50px" }}
      src="https://image.flaticon.com/icons/svg/139/139899.svg "
      alt="header-logo"
    />
    <h1 style={{ color: "white", textAlign: "left" }}>CYF Hotel</h1>
  </header>
);
export default Header;
