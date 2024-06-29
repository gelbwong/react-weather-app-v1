import React, { useState, useEffect } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState({});

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="row Forecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col forecast-info" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
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
