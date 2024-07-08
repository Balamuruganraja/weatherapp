import React from 'react';

const PersonalStory = ({ weather }) => {
  let story;

  switch (weather) {
    case 'Sunny':
      story = "On a bright and sunny day, I decided to take a spontaneous road trip to the beach. The sun was shining, the sky was clear, and the warm breeze made it the perfect day to enjoy the outdoors.";
      break;
    case 'Rain':
      story = "It was a rainy afternoon when I found myself curled up with a good book and a cup of hot cocoa. The sound of raindrops against the window created a cozy and peaceful atmosphere.";
      break;
    case 'Snowy':
      story = "One snowy winter morning, I woke up to a blanket of white covering everything outside. I spent the day building a snowman and having a snowball fight with friends. It was a magical and unforgettable experience.";
      break;
    case 'Clouds':
      story = "The day was cloudy and cool, perfect for a walk in the park. The grey sky and the cool breeze made the colorful flowers and green trees stand out even more. It was a serene and reflective day.";
      break;
    case 'Clear':
      story = "It was a day with a clear sky, the perfect setting for a picnic in the park. The blue sky without a single cloud made it a beautiful and relaxing day.";
      break;
    default:
      story = "No matter what the weather is, every day brings its own unique beauty and opportunities. Whether it's sunny, rainy, snowy, or cloudy, there's always something to appreciate and enjoy.";
      break;
  }

  return (
    <div className="personal-story">
      <h2>My Weather Story</h2>
      <p>{story}</p>
    </div>
  );
};

export default PersonalStory;
