import React from "react";
import ForecastBlock from "./ForecastBlock";
import "./ForecastList.css";

const ForecastList = () => {
  return (
    <ul className="list">
      <ForecastBlock />
      <ForecastBlock />
      <ForecastBlock />
      <ForecastBlock />
      <ForecastBlock />
    </ul>
  );
};

export default ForecastList;
