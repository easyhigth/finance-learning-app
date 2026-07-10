import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LearnPage.css';

const LearnPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Données d'exemple pour les leçons
  const lessons = [
    {
      id: 1,
      title: "Introduction to Finance",
      description: "Learn the basics of finance and its importance in our daily lives",
      category: "Basics",
      completed: true,
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Time Value of Money",
      description: "Understand how money's value changes over time",
      category: "Basics",
      completed: true,
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Interest Rates",
      description: "Explore how interest rates work and their impact on investments",
      category: "Investments",
      completed: false,
      difficulty: "Intermediate"
    },
    {
      id: 4,
      title: "Compound Interest",
      description: "Discover the power of compound interest in growing wealth",
      category: "Investments",
      completed: false,
      difficulty: "Beginner"
    },
    {
      id: 5,
      title: "Risk and Return",
      description: "Learn about the relationship between risk and potential returns",
      category: "Investments",
      completed: false,
      difficulty: "Intermediate"
    }
  ];

  const categories = [
    "Banking", "Investment", "Financial Markets",
    "Corporate Finance", "Personal Finance", "Risk Management"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Dans une vraie app, cela rechercherait des termes
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="learn-page">
      <div className="learn-header">
        <h1>Learning Path</h1>
        <p>Follow structured lessons to master finance concepts</p>
      </div>

      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search finance terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <h2>Your Progress</h2>
          <span className="progress-text">2/5 lessons completed</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{width: '40%'}}></div>
        </div>
      </div>

      <div className="lessons-section">
        <h2>Recommended Lessons</h2>
        <div className="lessons-grid">
          {lessons.map(lesson => (
            <div key={lesson.id} className={`lesson-card ${lesson.completed ? 'completed' : ''}`}>
              <div className="lesson-header">
                <span className={`difficulty ${lesson.difficulty.toLowerCase()}`}>
                  {lesson.difficulty}
                </span>
                <span className="category">{lesson.category}</span>
              </div>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
              <div className="lesson-actions">
                {lesson.completed ? (
                  <span className="completed-badge">✓ Completed</span>
                ) : (
                  <button className="start-button">Start Lesson</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="categories-section">
        <h2>Explore Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link key={index} to="/categories" className="category-card">
              <div className="category-icon">📚</div>
              <h3>{category}</h3>
              <p>Learn key concepts in {category.toLowerCase()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;