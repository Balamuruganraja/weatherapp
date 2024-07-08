import React, { useEffect } from 'react';

const WeatherMood = ({ weatherData, userType }) => {
  console.log(userType);

  const weather = weatherData.weather[0].main
  let type;
  let story

  useEffect(() => {
    document.body.className = '';
    if (weather.includes('Rain')) document.body.classList.add('rainy');
    if (weather.includes('Sun')) document.body.classList.add('sunny');
    if (weather.includes('Snow')) document.body.classList.add('snowy');
    if (weather.includes('Clou')) document.body.classList.add('clouds');
  }, [weather]);

    switch (userType) {
      case 'event_planner':        
            type = "Event Planner Tips";
            story = "Check the weather for the next few days to plan outdoor events accordingly"
            break;
      case 'farmer':
        type = "Farmer Insights";
        story = "Look for precipitation and temperature changes to plan your farming activities."
        break;
        
      case 'traveler':
        type = "Traveler Information";
        story = "Check the weather for your travel destination to pack accordingly and plan your trip."
        break;
      default:
        return null;
    }

  return (
    <div className="weather-mood">
      <h2>{type}</h2>
      <p>{story}</p>
      <h4>Current Mood: {weather}</h4>  
    </div>
  );
};

export default WeatherMood;
