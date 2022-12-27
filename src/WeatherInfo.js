import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>The weather in {props.data.city} is...</h2>

      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <span className="Weather-temp">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">
            <a href="/"> °C |</a>
          </span>

          <span className="unit">
            <a href="/"> °F </a>
          </span>
        </div>
        <div className="col-6 ">
          <ul>
            <li>Feels Like: {props.data.feelsLike}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
