import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import LoadingText from "./LoadingText";
import WeatherInfo from "./WeatherInfo";
import Header from "./Header";
import Forecast from "./Forecast";

export default function Weather(prop) {
  let [weatherInfo, setWeatherInfo] = useState({ ready: false });
  let [city, setCity] = useState(prop.defaultCity);
  let [unit, setUnit] = useState("celsius");

  let handleButtonClick = (newUnit) => {
    setUnit(newUnit);
  };

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSearch(response) {
    const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
      type: "region",
    });
    let country = regionNamesInEnglish.of(response.data.sys.country);

    let weatherPicture = `./weatherIcons/${response.data.weather[0].icon}.png`;

    let iconDescrip = `${response.data.weather[0].description} icon`;

    setWeatherInfo({
      ready: true,

      city: response.data.name,
      coords: response.data.coord,
      country: country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: weatherPicture,
      iconDescription: iconDescrip,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "ed238469f9b5e9d801834270e65449bc";
    const unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios
      .get(apiUrl)
      .then(handleSearch)
      .catch((error) => {
        alert(
          `Sorry about ${city}, I'm not sure about that. Please try another city again!`
        );
      });
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather container">
        <Header data={weatherInfo} />

        <form
          className="search-engine"
          id="search-engine"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-10 search-bar-div">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-bar"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-2 search-button-div">
              <input
                type="submit"
                value="Search"
                className="btn search-button"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherInfo} onButtonClick={handleButtonClick} />

        <Forecast data={weatherInfo.coords} unit={unit} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <LoadingText />
      </div>
    );
  }
}
