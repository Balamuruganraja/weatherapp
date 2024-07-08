import React, { useState, useEffect, useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import PersonalStory from './PersonalStory';
import WeatherMood from './WeatherMood';

const WeatherCard = ({ apiKey, location, userType }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    setLoading(true)
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setError('Unable to fetch weather data');
          setLoading(false)
        });
    }, 1000);

    return () => {
      clearTimeout(debounceTimeoutRef.current);
    };
  }, [location, apiKey]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }else if(weatherData && weatherData.cod === 200) {
    if (error) return <div>{error}</div>;

    return (
      <div className="main-content">
        <div className="weather-card">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} km/h</p>
        </div>
        <WeatherMood weatherData={weatherData} userType={userType} />
        <PersonalStory weather={weatherData.weather[0].main} />
      </div>
    );
  }else{
    return(
    <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
    <h3>No Data Found</h3>
  </div>
  )
    
  }

  
};

export default WeatherCard;
