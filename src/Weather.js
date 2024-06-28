import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import Design from "./images/sample-designs.png";
import LeftDesign from "./images/Left-design.png";
import RightDesign from "./images/Right-design.png";

import FormattedDate from "./FormattedDate";
import LoadingText from "./LoadingText";

export default function Weather(prop) {
  let [weatherInfo, setWeatherInfo] = useState({ ready: false });
  let [city, setCity] = useState(prop.defaultCity);

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

    axios.get(apiUrl).then(handleSearch);
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather container">
        <div className="row mt-4">
          <div className="col-4">
            <img
              src={LeftDesign}
              alt="Handrawn design for left of the title of page."
              className="img-fluid city-decoration"
            />
          </div>
          <div className="col-4 city-country">
            <h1 className="city-title">{weatherInfo.city}</h1>
            <h2 className="country-title">{weatherInfo.country}</h2>
          </div>
          <div className="col-4">
            <img
              src={RightDesign}
              alt="Handrawn design for right of the title of page."
              className="img-fluid"
            />
          </div>
        </div>

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

        <div className="row current-date ">
          <div className="col-6 text-start date-time">
            <FormattedDate date={weatherInfo.date} />
          </div>
          <div className="col-6 text-end weather-description text-capitalize">
            {weatherInfo.description}
          </div>
        </div>

        <div className="row current-weather-details">
          <div className="col-4">
            <img
              src={Design}
              alt="Simple mirrorred freehand design"
              className="img-fluid current-weather-decoration"
            />
          </div>

          <div className="col-4">
            <ul className="list-group list-group-flush current-weather">
              <li className="list-group-item ">Temp: {weatherInfo.temp}°C</li>
              <li className="list-group-item ">
                Humidity: {weatherInfo.humidity}%
              </li>
              <li className="list-group-item ">
                Wind: {Math.round(weatherInfo.wind)} km/hr
              </li>

              <li className="list-group-item">
                <img
                  src={weatherInfo.iconUrl}
                  alt={weatherInfo.iconDescription}
                  className="img-fluid"
                  width="130px"
                />
              </li>
            </ul>
          </div>
          <div className="col-4">
            <img
              src={Design}
              alt="Simple mirrorred freehand design"
              className="img-fluid current-weather-decoration"
            />
          </div>
        </div>
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
