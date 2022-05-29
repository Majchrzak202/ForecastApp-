import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/UI/Navbar";
import SearchBar from "./Components/UI/SearchBar";
import Header from "./Components/UI/Header";
import ForecastList from "./Components/Forecast /ForecastList";

const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "fc2d8edbe10cfef5fdbdf346f97a5c83",
};

function App() {
  const [search, setSearch] = useState("");
  const [forecast, setForecast] = useState(null);
  const [weather, setWeather] = useState(null);
  const fetchForecastHandler = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        let cityLat = data.coord.lat;
        let cityLon = data.coord.lon;
        setWeather(data);
        console.log(data)

        return fetch(
          `${api.base}onecall?lat=${cityLat}&lon=${cityLon}&exclude=current,hourly,minutely&units=metric&APPID=${api.key}`
        )
          .then((res) => res.json())
          .then((data) => {
            setForecast(data);
          });
      });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="app">
        <Header />
        <SearchBar
          search={search}
          setSearch={setSearch}
          fetchForecastHandler={fetchForecastHandler}
        />
      </div>
      <div className="forecast-list">
        <ForecastList forecast={forecast} weather={weather} />
      </div>
    </div>
  );
}

export default App;
