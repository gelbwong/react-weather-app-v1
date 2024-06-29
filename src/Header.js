import React from "react";

import LeftDesign from "./images/Left-design.png";
import RightDesign from "./images/Right-design.png";

import "./Header.css";

export default function Header(props) {
  return (
    <div className="row mt-4 Header">
      <div className="col-4">
        <img
          src={LeftDesign}
          alt="Handrawn design for left of the title of page."
          className="img-fluid city-decoration"
        />
      </div>
      <div className="col-4 city-country">
        <h1 className="city-title">{props.data.city}</h1>
        <h2 className="country-title">{props.data.country}</h2>
      </div>
      <div className="col-4">
        <img
          src={RightDesign}
          alt="Handrawn design for right of the title of page."
          className="img-fluid"
        />
      </div>
    </div>
  );
}
