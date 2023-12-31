'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, setCity } from '../app/store/slices/fetch';
import WeatherList from '../app/function/weatherRender';


const SearchBar = () => {
    const [city, setCityValue] = useState('');
    const [searchDelay, setSearchDelay] = useState(null);
    const dispatch = useDispatch();
    const cities = useSelector((state) => state.weather.cities);

    const handleSearch = async() => {
        try {
          if (city) {

            const response = await dispatch(fetchWeather(city));

            const name = response.payload.city ? response.payload.city.name: "";
            const data = response.payload.list || [];

            dispatch(setCity({ name, data}));
            setCityValue('');

          }
        } catch (error) {
          console.error('Error in handleSearch:', error);
        }
      };

  useEffect(() => {
    return () => {
        if (searchDelay) {
            clearTimeout(searchDelay);
        }
    };
  }, [searchDelay]);

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter a city"
                value={city}
                onChange={(e) => setCityValue(e.target.value)}
                required
            />
            <button 
            onClick={handleSearch}required> Submit</button>

            <div>
                <h2>Saved Cities</h2>
                <ul>
                    {cities.map((savedCity, index) => (
                        <li key={index}>
                        <strong>Name:</strong>{savedCity.name} <WeatherList data={savedCity.data}/></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchBar;