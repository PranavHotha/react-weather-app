import axios from "axios";
import { useState, useEffect } from "react";
import "./WeatherData.css";

export default function WeatherData({ city }) {
  // Receiving the city prop
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setWeather(null);
    setError(null);
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // api key is in the .env file for safety purposes
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios
      .get(url)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((err) => {
        setError("City not found! Please check your input.");
      });
  }, [city]); // This tells React: "Run this every time the city changes"

  if (error) return <div> {error} </div>;
  if (!weather) return <p>Loading...</p>;
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-results">
      <h2>
        {weather.name}, {weather.sys.country}{" "}
      </h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p> Wind speed: {weather.wind.speed} m/s</p>
      <p> {weather.weather[0].main} </p>
      <img src={iconUrl} alt={weather.weather[0].description} />
    </div>
  );
}
