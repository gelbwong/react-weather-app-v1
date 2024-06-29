import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState({});

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily[0]);
  }

  if (loaded) {
    let iconUrl = `./weatherIcons/${forecast.weather[0].icon}.png`;
    let iconDescrip = `${forecast.weather[0].description} icon`;

    let minTemp = Math.round(forecast.temp.min);
    let maxTemp = Math.round(forecast.temp.max);

    let date = new Date(forecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let abrevDay = days[day];

    return (
      <div className="row Forecast">
        <div className="col forecast-info">
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
      </div>
    );
  } else {
    const apiKey = "ed238469f9b5e9d801834270e65449bc";
    const unit = "metric";

    let lat = props.data.lat;
    let lon = props.data.lon;

    let part = "current,minutely,hourly,alerts";

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }
}
