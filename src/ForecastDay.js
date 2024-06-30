import React, { useState, useEffect } from "react";

export default function ForecastDay(props) {
  let [unit, setUnit] = useState(props.unit);

  useEffect(() => {
    setUnit(props.unit);
  }, [props.unit]);

  let iconUrl = `./weatherIcons/${props.data.weather[0].icon}.png`;
  let iconDescrip = `${props.data.weather[0].description} icon`;

  let minTemp = Math.round(props.data.temp.min);
  let maxTemp = Math.round(props.data.temp.max);

  let fahrenheitMinTemp = Math.round((minTemp * 9) / 5 + 32);
  let fahrenheitMaxTemp = Math.round((maxTemp * 9) / 5 + 32);

  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let abrevDay = days[day];
  if (unit === "celsius") {
    return (
      <div>
        <div className="forecast-day">{abrevDay}</div>
        <img
          src={iconUrl}
          alt={iconDescrip}
          className="img-fluid"
          width="80px"
        />
        <div>
          <span className="forecast-min-temp">{minTemp}</span>° |{" "}
          <span className="forecast-max-temp">{maxTemp}</span>°
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="forecast-day">{abrevDay}</div>
        <img
          src={iconUrl}
          alt={iconDescrip}
          className="img-fluid"
          width="80px"
        />
        <div>
          <span className="forecast-min-temp">{fahrenheitMinTemp}</span>° |{" "}
          <span className="forecast-max-temp">{fahrenheitMaxTemp}</span>°
        </div>
      </div>
    );
  }
}
