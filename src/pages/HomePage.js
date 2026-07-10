import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to Finance Learning App</h2>
      <p>Learn finance concepts in a fun and interactive way, similar to Duolingo!</p>
      <div>
        <Link to="/learn">
          <button>Start Learning</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;