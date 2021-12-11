import React from "react";
import { DateTime } from "luxon";

const Info = ({ weather }) => {
  const weatherIcon = `${weather.weather[0].main}-icon`;
  return (
    <div className={`info ${weatherIcon}`}>
      <div className="city">
        {weather.name}, {weather.sys.country}
      </div>
      <div className="temperature">
        <p className="temp_feels-like">
          Feels like: {Math.round(weather.main.feels_like)}°
        </p>
        <p className="temp_max">Max: {Math.round(weather.main.temp_max)}°</p>
        <p className="temp_min">Min: {Math.round(weather.main.temp_min)}°</p>
      </div>
      <p className="temp_now">{Math.round(weather.main.temp)}°C</p>
      <div className="date">
        {DateTime.fromSeconds(weather.dt).toLocaleString(DateTime.DATE_HUGE)}
      </div>
      <p className="general_description">{weather.weather[0].main}</p>
      <div className="description">
        <p className="visibility">Visibility: {weather.visibility} m</p>
        <p className="humidity">Humidity: {weather.main.humidity}%</p>
      </div>
    </div>
  );
};

export default Info;
