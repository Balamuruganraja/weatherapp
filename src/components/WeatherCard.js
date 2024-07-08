import React, { useState, useEffect } from 'react';
import WeatherMood from './WeatherMood';
import PersonalStory from './PersonalStory';

const WeatherCard = ({ apiKey, location }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, [location, apiKey]);

  if (!weatherData || weatherData.cod !== 200) return <div className='App-logo-spin'>Loading...</div>;
  console.log(weatherData);
  return (
    <div className='main-content'>
    <div className="weather-card">
      <h2>{weatherData.name}</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
    </div>
    <WeatherMood weatherData={weatherData} />
    <PersonalStory weather={weatherData.weather[0].main}/>
    </div>
  );
};

export default WeatherCard;
