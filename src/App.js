import React, { useState } from 'react';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import WeatherMood from './components/WeatherMood';
import PersonalStory from './components/PersonalStory';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('Dindigul');
  const apiKey = '3535bf0ae2958c1c4368808817e83dab'; // Replace with your OpenWeatherMap API key

  const onLocationChange = (e) => {
    setLocation(e.target.value)
  }
  return (
    <div className="App">
      <Header />
        <input type='text' placeholder='Enter Location' value={location} onChange={onLocationChange}></input>
      <div className="">
        <WeatherCard apiKey={apiKey} location={location} />        
      </div>
    </div>
  );
};

export default App;
