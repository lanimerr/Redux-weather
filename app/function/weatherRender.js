import React from 'react';
import { useSelector } from 'react-redux';
import ChartRender from './chartRender';


const WeatherList = ({ data }) =>  {
  const { city, temperature, pressure, humidity, loading, error } = useSelector(state => state.weather);

    if (loading) {
      return <div className="loading-message">Loading...</div>;
     }
  
     if (error) {
      return <div className="error-message">Error: {error}</div>;
     }

     return (
      <div className="chart-header mt-2">
        <hr />
        <div className="row">
          <div className="col">
            <p>
              <strong>City</strong>
            </p>
            <br/>
            <div>{city}</div>
          </div>
    
          <div className="col">
            <p>
              <strong>Temperature</strong>
            </p>
            <ChartRender units="F" data={temperature} />
          </div>
    
          <div className="col">
            <p>
              <strong>Pressure</strong>
            </p>
            <ChartRender units="hPa" data={pressure} />
          </div>
    
          <div className="col m-2">
            <p>
              <strong>Humidity</strong>
            </p>
            <ChartRender units="%" data={humidity} />
          </div>
        </div>
        <hr />
      </div>
    );
};
  
  export default WeatherList;