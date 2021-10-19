import React from "react";
import "./App.css";
import TouristCardsAndImages from "../src/data/TouristCardsAndImages";

const TouristInfoCards = () => {
  return (
    <div className="container-lg">
      <h1 className="welcome-msg" style={{ textAlign: "center" }}>
        Welcome to CYF Hotel
      </h1>
      <br />
      <div
        className="card-deck"
        style={{
          alignContent: "center",
          width: "100%",
          marginLeft: "unset"
        }}
      >
        {TouristCardsAndImages.map((city, index) => (
          <div key={index} className="card">
            <img
              src={city.photo}
              alt=" "
              className="card-img-top"
              style={{ height: "400Px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{city.cityName}</h5>
              <br />
              <p className="card-text">{city.description}</p>
              <a href={city.link} className="btn btn-info">
                Go {city.cityName}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TouristInfoCards;
