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
  const [query, setQuery] = useState("Warsaw");
  const fetchForecastHandler = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        let cityLat = data.coord.lat;
        let cityLon = data.coord.lon;

        return fetch(
          `${api.base}onecall?lat=${cityLat}&lon=${cityLon}&exclude=current,hourly,minutely&APPID=${api.key}`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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
        <SearchBar />

        {/* <button onClick={fetchForecastHandler}>Fetch Forecast</button> */}
      </div>
      <div className="forecast-list">
        
        <ForecastList />
      </div>
    </div>
  );
}

export default App;
