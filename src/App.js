import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import footerDetails from "./data/FooterDetails";
import Restaurant from "./Restaurant";
const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer footerDetails={footerDetails} />
    </div>
  );
};

export default App;
