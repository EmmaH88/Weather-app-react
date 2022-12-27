import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      feelsLike: Math.round(response.data.main.feels_like),
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/cloudy.png`,
    });
    console.log(response.data);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>Weather Search</h1>
        <form className="SearchEngine">
          <input type="search" placeholder="Enter a city..." />
          <input type="submit" value="search" className="btn btn-primary " />
        </form>

        <h2>The weather in {weatherData.city} is...</h2>

        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="Weather-temp">
              {Math.round(weatherData.temperature)}
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
              <li>Feels Like: {weatherData.feelsLike}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "85bcdd2ad2afb7ce15a8242b1ff12dc1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
