import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress, total }) => {
  const percentage = total > 0 ? Math.round((progress / total) * 100) : 0;

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span className="progress-text">Progress: {progress} / {total} lessons</span>
        <span className="progress-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;