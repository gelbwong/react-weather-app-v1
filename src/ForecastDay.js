import React from "react";

export default function ForecastDay(props) {
  let iconUrl = `./weatherIcons/${props.data.weather[0].icon}.png`;
  let iconDescrip = `${props.data.weather[0].description} icon`;

  let minTemp = Math.round(props.data.temp.min);
  let maxTemp = Math.round(props.data.temp.max);

  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let abrevDay = days[day];

  return (
    <div>
      <div className="forecast-day">{abrevDay}</div>
      <img src={iconUrl} alt={iconDescrip} className="img-fluid" width="80px" />
      <div>
        <span className="forecast-min-temp">{minTemp}</span>° |{" "}
        <span className="forecast-max-temp">{maxTemp}</span>°
      </div>
    </div>
  );
}
