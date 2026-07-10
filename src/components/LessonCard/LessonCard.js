import React from 'react';
import './LessonCard.css';

const LessonCard = ({ title, description, onClick, completed = false }) => {
  return (
    <div
      className={`lesson-card ${completed ? 'completed' : ''}`}
      onClick={onClick}
    >
      <div className="lesson-content">
        <h3 className="lesson-title">{title}</h3>
        <p className="lesson-description">{description}</p>
      </div>
      <div className="lesson-status">
        {completed ? (
          <span className="completed-icon">✓</span>
        ) : (
          <span className="pending-icon">○</span>
        )}
      </div>
    </div>
  );
};

export default LessonCard;