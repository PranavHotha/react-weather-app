import { useState } from "react";
import "./WeatherApp.css";
import WeatherData from "./WeatherData";
export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function displayCity(e) {
    setCity(e.target.value);
  }

  function submitSearch(e) {
    e.preventDefault();
    // Only update the search term when the button is clicked!
    setSearchQuery(city);
  }

  return (
    <div className="weather-app">
      <h1> Weather App </h1>
      <hr />
      <form onSubmit={submitSearch}>
        <label htmlFor="enter-city-name"> Enter City: </label>
        <input
          id="enter-city-name"
          name="city-name"
          placeholder="Enter city name.."
          onChange={displayCity}
        />
        <button type="submit"> Search </button>
        {searchQuery && <WeatherData city={searchQuery} />}
      </form>
    </div>
  );
}
