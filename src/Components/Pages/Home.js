import React from "react";
import Header from "../UI/Header";
import SearchBar from "../UI/SearchBar";
import ForecastList from "../Forecast /ForecastList";
import Footer from "../UI/Footer";
import './Home.css'

const Home = ({search, setSearch, fetchForecastHandler, forecast, weather}) => {
  return (
    <div>
      <div className="app">
        <Header />
        <SearchBar
          search={search}
          setSearch={setSearch}
          fetchForecastHandler={fetchForecastHandler}
        />
      </div>
      <div className='forecast-list'>
        <ForecastList forecast={forecast} weather={weather} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
