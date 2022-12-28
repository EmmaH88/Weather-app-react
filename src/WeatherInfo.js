import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>The weather in {props.data.city} is...</h2>

      <ul>
        <li> Last updated...</li>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div>
            <WeatherIcon code={props.data.icon} size={70} />
          </div>
          <div>
            <WeatherConversion celsius={props.data.temperature} />
          </div>
        </div>

        <div className="col-6">
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
