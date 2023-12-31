'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../components/SearchBar';
import WeatherList from './function/weatherRender';


const Home = () => {

  return (
      <div className="app container text-center">
          <h1 className="m-4">Weather Forecast</h1>
          <SearchBar />
          <WeatherList/>
      </div>
  );
};

export default Home;