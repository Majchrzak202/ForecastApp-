import React, { useState, lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/UI/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/UI/Footer";

import useFetch from "./hooks/useFetch";

const About = lazy(() => import("./Components/Pages/About"));
const Contact = lazy(() => import("./Components/Pages/Contact"));
const PageNotFound = lazy(() => import("./Components/Pages/PageNotFound"));
const ThankYou = lazy(() => import("./Components/Pages/ThankYou"));

const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "fc2d8edbe10cfef5fdbdf346f97a5c83",
};

function App() {
  const [search, setSearch] = useState("");
  const [forecast, setForecast] = useState(null);
  const [weather, setWeather] = useState(null);

  const GetWeather = async (data) => {
    let cityLat = data.coord.lat;
    let cityLon = data.coord.lon;
    setWeather(data);

    const forecast = await fetch(
      `${api.base}onecall?lat=${cityLat}&lon=${cityLon}&exclude=current,hourly,minutely&units=metric&APPID=${api.key}`
    );
    const forecastData = await forecast.json();
    setForecast(forecastData);
  };

  const { sendRequest: fetchForecastHandler } = useFetch(
    { url: `${api.base}weather?q=${search}&units=metric&APPID=${api.key}` },
    GetWeather
  );

  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
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
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
