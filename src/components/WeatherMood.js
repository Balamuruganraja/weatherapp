import React, { useEffect } from 'react';

const WeatherMood = ({ weatherData }) => {

  const weather = weatherData.weather[0].main

  useEffect(() => {
    document.body.className = '';
    if (weather.includes('Rain')) document.body.classList.add('rainy');
    if (weather.includes('Sun')) document.body.classList.add('sunny');
    if (weather.includes('Snow')) document.body.classList.add('snowy');
    if (weather.includes('Clou')) document.body.classList.add('clouds');
  }, [weather]);

  return (
    <div className="weather-mood">
      <h2>Current Mood: {weather}</h2>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind: {weatherData.wind.speed} km/h</p>
    </div>
  );
};

export default WeatherMood;
