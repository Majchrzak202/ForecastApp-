import React from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearch, fetchForecastHandler, search }) => {
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const submithHandler = (e) => {
    e.preventDefault();
    if (search.length === 0) {
      return
    }

    fetchForecastHandler();
  };

  return (
    <div className="form">
      <form>
        <div className="input">
          <input onChange={searchHandler} type="text" />
        </div>
        <div className="form-button">
          <button onClick={submithHandler} className="button">FETCH FORECAST</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
