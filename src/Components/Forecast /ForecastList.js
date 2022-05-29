import React from "react";
import ForecastBlock from "./ForecastBlock";
import "./ForecastList.css";
import moment from "moment";

const ForecastList = ({ forecast, weather }) => {
  return (
    <div>
      <div className='title'>
        <h2>{weather && weather.name}, {weather && weather.sys.country}</h2>
      </div>
    <ul className="list">
      {forecast && (
        <ForecastBlock
          min_temp={forecast.daily[0].temp.min}
          max_temp={forecast.daily[0].temp.max}
          icon_id={forecast.daily[0].weather[0].icon}
          descript={forecast.daily[0].weather[0].main}
          date={moment().add(0, "d").toDate()}
        />
      )}
      {forecast && (
        <ForecastBlock
          min_temp={forecast.daily[1].temp.min}
          max_temp={forecast.daily[1].temp.max}
          icon_id={forecast.daily[1].weather[0].icon}
          descript={forecast.daily[1].weather[0].main}
          date={moment().add(1, "d").toDate()}
        />
      )}
      {forecast && (
        <ForecastBlock
          min_temp={forecast.daily[2].temp.min}
          max_temp={forecast.daily[2].temp.max}
          icon_id={forecast.daily[2].weather[0].icon}
          descript={forecast.daily[2].weather[0].main}
          date={moment().add(2, "d").toDate()}
        />
      )}
      {forecast && (
        <ForecastBlock
          min_temp={forecast.daily[3].temp.min}
          max_temp={forecast.daily[3].temp.max}
          icon_id={forecast.daily[3].weather[0].icon}
          descript={forecast.daily[3].weather[0].main}
          date={moment().add(3, "d").toDate()}
        />
      )}
      {forecast && (
        <ForecastBlock
          min_temp={forecast.daily[4].temp.min}
          max_temp={forecast.daily[4].temp.max}
          icon_id={forecast.daily[4].weather[0].icon}
          descript={forecast.daily[4].weather[0].main}
          date={moment().add(4, "d").toDate()}
        />
      )}
    </ul>
    </div>
  );
};

export default ForecastList;
