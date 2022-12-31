import React, { useState } from "react";
import WeatherForecastDays from "./WeatherForecastDays";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDays data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "85bcdd2ad2afb7ce15a8242b1ff12dc1";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
