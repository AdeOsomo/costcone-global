import React from 'react';
import '../CSS/Home.css';
import Countdown from '../components/CountDown';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Countdown targetDate="2023-12-31" /> {/* Set your target date */}
    </div>
    
  );
};

export default Home;

