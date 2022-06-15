import React from "react";
import ForecastBlock from "./ForecastBlock";
import "./ForecastList.css";
import moment from "moment";
import { motion } from "framer-motion";

const ForecastList = ({ forecast, weather }) => {
  const blocks = [];

  if (forecast === null) {
    return null;
  } else {
    for (let i = 0; i < 5; i++) {
      blocks.push(
        <ForecastBlock
          min_temp={forecast.daily[i].temp.min}
          max_temp={forecast.daily[i].temp.max}
          icon_id={forecast.daily[i].weather[0].icon}
          descript={forecast.daily[i].weather[0].main}
          date={moment().add(i, "d").toDate()}
        />
      );
    }
  }

  return (
    <motion.div animate={{ y: -10 }} transition={{ delay: 1 }}>
      <div className="title">
        <h2>
          {weather && weather.name}, {weather && weather.sys.country}
        </h2>
      </div>
      <ul className="list">
        {forecast && blocks.map((item, index) => <div key={index}>{item}</div>)}
      </ul>
    </motion.div>
  );
};

export default React.memo(ForecastList);
