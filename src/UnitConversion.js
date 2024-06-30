import React, { useState } from "react";

export default function UnitConversion(props) {
  let [unit, setUnit] = useState(props.defaultUnit);

  function showFahrenheit(event) {
    event.preventDefault();

    setUnit("fahrenheit");

    props.onButtonClick("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();

    setUnit("celsius");

    props.onButtonClick("celsius");
  }

  function fahrenheitTemp() {
    let newTemp = (props.temp * 9) / 5 + 32;

    return newTemp;
  }

  function imperialWind() {
    let newWind = props.wind / 1.609344;
    return newWind;
  }

  if (unit === "celsius") {
    return (
      <div>
        <li className="list-group-item no-border">
          Temp: {Math.round(props.temp)}°C |{" "}
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </li>

        <li className="list-group-item no-border">
          Wind: {Math.round(props.wind)} km/h
        </li>
      </div>
    );
  } else {
    return (
      <div>
        <li className="list-group-item no-border">
          Temp: {Math.round(fahrenheitTemp())}°F |{" "}
          <a href="/" onClick={showCelsius}>
            C
          </a>
        </li>

        <li className="list-group-item no-border">
          Wind: {Math.round(imperialWind())} mi/h
        </li>
      </div>
    );
  }
}
