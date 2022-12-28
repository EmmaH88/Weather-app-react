import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-days">Wed</div>

          <WeatherIcon code="02d" size={30} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-hi">12°</span>
            <span className="WeatherForecast-temp-lo">7°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
