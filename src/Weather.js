import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "85bcdd2ad2afb7ce15a8242b1ff12dc1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="m-3" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={handleCityChange}
          />

          <input type="submit" value="search" className="btn btn-success" />
        </form>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
