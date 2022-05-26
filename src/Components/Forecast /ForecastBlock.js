import React from "react";
import './ForecastBlock.css'

const ForecastBlock = () => {
  return (
    <li className='ul'>
      <h4>Monday</h4>
      <p>May 1st</p>
      <img  src='https://icons.iconarchive.com/icons/dapino/beach/256/sun-icon.png' />
      <p>Sunny</p>
    </li>
  );
};

export default ForecastBlock;
