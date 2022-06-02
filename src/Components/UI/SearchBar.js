import React from "react";
import "./SearchBar.css";
import { motion } from "framer-motion";

const SearchBar = ({ setSearch, fetchForecastHandler, search }) => {
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const submithHandler = (e) => {
    e.preventDefault();
    if (search.length === 0) {
      return;
    }

    fetchForecastHandler();
    setSearch("");
  };

  console.log('TYPING')

  return (
    <div className="form">
      <form>
        <div className="input">
          <input onChange={searchHandler} type="text" value={search} />
        </div>
        <div className="form-button">
          <motion.button whileHover={{opacity:0.8, scale:1.01}} onClick={submithHandler} className="button">
            FETCH FORECAST
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(SearchBar);
