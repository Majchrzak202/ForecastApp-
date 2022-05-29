import React from "react";
import ForecastBlock from "./ForecastBlock";
import "./ForecastList.css";


const ForecastList = ({ forecast }) => {
    
    
    const now = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
    const day = days[now.getDay()]
    const month = months[now.getMonth()]

    
    


  return (
    <ul className="list">
      {forecast && (
        <ForecastBlock
          min_temp={forecast.daily[0].temp.min}
          max_temp={forecast.daily[0].temp.max}
          icon_id={forecast.daily[0].weather[0].icon}
          
        />
      )}
      {forecast && (
        <ForecastBlock
          min_temp={forecast.daily[1].temp.min}
          max_temp={forecast.daily[1].temp.max}
          icon_id={forecast.daily[1].weather[0].icon}
        />
      )}
      {forecast && (
        <ForecastBlock
          min_temp={forecast.daily[2].temp.min}
          max_temp={forecast.daily[2].temp.max}
          icon_id={forecast.daily[2].weather[0].icon}
        />
      )}
      {forecast && (
        <ForecastBlock
          min_temp={forecast.daily[3].temp.min}
          max_temp={forecast.daily[3].temp.max}
          icon_id={forecast.daily[3].weather[0].icon}
        />
      )}
      {forecast && (
        <ForecastBlock
          min_temp={forecast.daily[4].temp.min}
          max_temp={forecast.daily[4].temp.max}
          icon_id={forecast.daily[4].weather[0].icon}
        />
      )}

    </ul>
  );
};

export default ForecastList;
