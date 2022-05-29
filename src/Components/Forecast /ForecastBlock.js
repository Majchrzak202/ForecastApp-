import React from "react";
import "./ForecastBlock.css";

const ForecastBlock = ({ min_temp, max_temp, icon_id, date, descript }) => {
  const url = `http://openweathermap.org/img/w/${icon_id}.png`;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekDay = days[date.getDay()];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = months[date.getMonth()];
  const currentDate = date.getDate();

  return (
    <li className="ul">
      <h4>{weekDay}</h4>
      <p>
        {currentMonth} {currentDate}
      </p>
      <img src={url} alt={icon_id}/>
      <p> min {min_temp}°</p>
      <p>max {max_temp}°</p>
      <p>{descript}</p>
    </li>
  );
};

export default ForecastBlock;
