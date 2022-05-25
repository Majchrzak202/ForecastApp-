import React from "react";
import "./App.css";

const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "fc2d8edbe10cfef5fdbdf346f97a5c83",
};

function App() {
  const fetchForecastHandler = () => {
    fetch(
      `${api.base}onecall?lat=33.44&lon=-94.04&exclude=current,hourly,minutely&units=metric&APPID=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="app">
      <button onClick={fetchForecastHandler}>Fetch Forecast</button>
    </div>
  );
}

export default App;
