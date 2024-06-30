import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <div className=" pt-4 Header">
      <div className="city-country">
        <h1 className="city-title">{props.data.city}</h1>
        <h2 className="country-title">{props.data.country}</h2>
      </div>
    </div>
  );
}
