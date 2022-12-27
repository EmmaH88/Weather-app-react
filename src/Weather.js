import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Weather Search</h1>
      <form className="SearchEngine">
        <input type="search" placeholder="Enter a city..." />
        <input type="submit" value="search" className="btn btn-primary " />
      </form>

      <h2>In, Castleford it is...</h2>

      <ul>
        <li>Tuesday 15:00</li>
        <li>Cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
          <span className="Weather-temp">8</span>
          <span className="unit">
            <a href="/"> °C |</a>
          </span>

          <span className="unit">
            <a href="/"> °F </a>
          </span>
        </div>
        <div className="col-6 ">
          <ul>
            <li>Precipitation: 18%</li>
            <li>Humidity: 93%</li>
            <li>Wind: 17mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
