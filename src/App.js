import React, { useState } from "react";
import Navbar from "./Components/UI/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import PageNotFound from "./Components/Pages/PageNotFound";
import Home from "./Components/Pages/Home";
import ThankYou from "./Components/Pages/ThankYou";

const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "fc2d8edbe10cfef5fdbdf346f97a5c83",
};

function App() {
  const [search, setSearch] = useState("");
  const [forecast, setForecast] = useState(null);
  const [weather, setWeather] = useState(null);
  

  const fetchForecastHandler = async () => {
    const response = await fetch(
      `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
    );
    const data = await response.json();
    let cityLat = data.coord.lat;
    let cityLon = data.coord.lon;
    setWeather(data);
    console.log(data);

    const forecast = await fetch(
      `${api.base}onecall?lat=${cityLat}&lon=${cityLon}&exclude=current,hourly,minutely&units=metric&APPID=${api.key}`
    );
    const forecastData = await forecast.json();
    setForecast(forecastData)
  };

  /* fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        let cityLat = data.coord.lat;
        let cityLon = data.coord.lon;
        setWeather(data);
        console.log(data);

        return fetch(
          `${api.base}onecall?lat=${cityLat}&lon=${cityLon}&exclude=current,hourly,minutely&units=metric&APPID=${api.key}`
        )
          .then((res) => res.json())
          .then((data) => {
            setForecast(data);
          });
      }); */

  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              fetchForecastHandler={fetchForecastHandler}
              forecast={forecast}
              weather={weather}
            />
          }
        ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank" element={<ThankYou />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
