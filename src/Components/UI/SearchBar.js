import React, { useState } from "react";
import "./SearchBar.css";
import { motion } from "framer-motion";

const SearchBar = ({ setSearch, fetchForecastHandler, search }) => {
  const [isTouched, setisTouched] = useState(false);

  const inputIsValid = search.trim() !== "";
  const inputIsInvalid = !inputIsValid && isTouched;

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const blurInputHandler = () => {
    setisTouched(true);
  };

  const submithHandler = (e) => {
    e.preventDefault();
    if (search.length === 0) {
      return;
    }

    fetchForecastHandler();
    setSearch("");
    setisTouched(false)
  };

  const inputFormControl = inputIsInvalid ? "invalid" : "";

  return (
    <div className="form">
      <form>
        <div className="input">
          <input
            className={inputFormControl}
            onBlur={blurInputHandler}
            onChange={searchHandler}
            placeholder='city/country name'
            type="text"
            value={search}
          />
          {inputIsInvalid && <p>Please provide a valid City Name!</p>}
        </div>
        <div className="form-button">
          <motion.button
            whileHover={{ opacity: 0.8, scale: 1.01 }}
            onClick={submithHandler}
            className="button"
            disabled={inputIsInvalid}
          >
            SHOW FORECAST
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(SearchBar);
