import React from "react";
import "./ForecastBlock.css";

const ForecastBlock = ({ min_temp, max_temp, icon_id }) => {
  const url = `http://openweathermap.org/img/w/${icon_id}.png`;

  return (
    <li className="ul">
      <h4>Monday</h4>
      <p>May 1st</p>
      <img src={url} />
      <p> min {min_temp}°</p>
      <p>max {max_temp}°</p>
      <p></p>
    </li>
  );
};

export default ForecastBlock;
