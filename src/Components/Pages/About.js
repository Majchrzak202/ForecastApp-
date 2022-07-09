import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2> This is awesome Forecast App</h2>
      <p>
        Just type-o desired City Name and see Weather Forecast for upcoming 5
        days!{" "}
      </p>
    </div>
  );
};

export default React.memo(About);
