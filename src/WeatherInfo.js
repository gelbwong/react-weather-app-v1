import React from "react";

import "./WeatherInfo.css";

import Design from "./images/sample-designs.png";

import FormattedDate from "./FormattedDate";
import UnitConversion from "./UnitConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row current-date ">
        <div className="col-6 text-start date-time">
          <FormattedDate date={props.data.date} />
        </div>
        <div className="col-6 text-end weather-description text-capitalize">
          {props.data.description}
        </div>
      </div>

      <div className="row current-weather-details">
        <div className="d-none d-sm-block col-4">
          <img
            src={Design}
            alt="Simple mirrorred freehand design"
            className="img-fluid current-weather-decoration"
          />
        </div>

        <div className="col-12 col-sm-4">
          <ul className="list-group list-group-flush current-weather">
            <UnitConversion
              defaultUnit="celsius"
              onButtonClick={props.onButtonClick}
              temp={props.data.temp}
              wind={props.data.wind}
            />
            <li className="list-group-item ">
              Humidity: {props.data.humidity}%
            </li>

            <li className="list-group-item">
              <img
                src={props.data.iconUrl}
                alt={props.data.iconDescription}
                className="img-fluid"
                width="140px"
              />
            </li>
          </ul>
        </div>
        <div className="col-4 d-none d-sm-block ">
          <img
            src={Design}
            alt="Simple mirrorred freehand design"
            className="img-fluid current-weather-decoration"
          />
        </div>
      </div>
    </div>
  );
}
