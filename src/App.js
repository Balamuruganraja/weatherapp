import React, { useState } from 'react';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('Dindigul');
  const [userType, setUserType] = useState('event_planner');
  const apiKey = '3535bf0ae2958c1c4368808817e83dab'; 

  const onLocationChange = (e) => {
    setLocation(e.target.value)
  }
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  return (
    <div className="App">
      <Header />
        <input className='input' type='text' placeholder='Enter Location' value={location} onChange={onLocationChange}></input>
        <div className="main-content">
        <div className="user-type-selector">
          <label>
            <input
              type="radio"
              value="event_planner"
              checked={userType === 'event_planner'}
              onChange={handleUserTypeChange}
            />
            Event Planner
          </label>
          <label>
            <input
              type="radio"
              value="farmer"
              checked={userType === 'farmer'}
              onChange={handleUserTypeChange}
            />
            Farmer
          </label>
          <label>
            <input
              type="radio"
              value="traveler"
              checked={userType === 'traveler'}
              onChange={handleUserTypeChange}
            />
            Traveler
          </label>
        </div>
        </div>
      <div>
        <WeatherCard apiKey={apiKey} location={location}  userType={userType}/>        
      </div>
    </div>
  );
};

export default App;
