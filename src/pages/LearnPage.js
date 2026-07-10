import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchFinanceTerms, getFinanceCategories } from '../services/wikipediaService';
import './LearnPage.css';

const LearnPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Données d'exemple pour les leçons
  const lessons = [
    {
      id: 1,
      title: "Introduction to Finance",
      description: "Learn the basics of finance and its importance in our daily lives",
      category: "Basics",
      completed: true,
      difficulty: "Beginner",
      time: "5 min"
    },
    {
      id: 2,
      title: "Time Value of Money",
      description: "Understand how money's value changes over time",
      category: "Basics",
      completed: true,
      difficulty: "Beginner",
      time: "10 min"
    },
    {
      id: 3,
      title: "Interest Rates",
      description: "Explore how interest rates work and their impact on investments",
      category: "Investments",
      completed: false,
      difficulty: "Intermediate",
      time: "15 min"
    },
    {
      id: 4,
      title: "Compound Interest",
      description: "Discover the power of compound interest in growing wealth",
      category: "Investments",
      completed: false,
      difficulty: "Beginner",
      time: "8 min"
    },
    {
      id: 5,
      title: "Risk and Return",
      description: "Learn about the relationship between risk and potential returns",
      category: "Investments",
      completed: false,
      difficulty: "Intermediate",
      time: "12 min"
    }
  ];

  const categories = getFinanceCategories();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const results = await searchFinanceTerms(searchTerm);
      setSearchResults(results.slice(0, 6)); // Limit to 6 results
    } catch (err) {
      setError('Failed to search terms. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Calculate progress
  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="learn-page">
      <div className="learn-header">
        <h1>Your Learning Journey</h1>
        <p>Follow structured lessons to master finance concepts</p>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <h2>Learning Progress</h2>
          <span className="progress-text">{completedLessons}/{totalLessons} lessons completed</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${progressPercentage}%`}}></div>
          </div>
          <div className="progress-percentage">{progressPercentage}%</div>
        </div>
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
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {searchResults.length > 0 && (
          <div className="quick-results">
            <h3>Quick Search Results</h3>
            <div className="results-list">
              {searchResults.map((result, index) => (
                <Link
                  key={index}
                  to={`/term/${encodeURIComponent(result.title)}`}
                  className="result-item"
                >
                  {result.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="lessons-section">
        <div className="section-header">
          <h2>Recommended Lessons</h2>
          <Link to="/categories" className="view-all">View All Categories</Link>
        </div>
        <div className="lessons-grid">
          {lessons.map(lesson => (
            <div key={lesson.id} className={`lesson-card ${lesson.completed ? 'completed' : ''}`}>
              <div className="lesson-header">
                <span className={`difficulty ${lesson.difficulty.toLowerCase()}`}>
                  {lesson.difficulty}
                </span>
                <span className="time-estimate">{lesson.time}</span>
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
        <div className="section-header">
          <h2>Explore Categories</h2>
          <Link to="/categories" className="view-all">View All</Link>
        </div>
        <div className="categories-grid">
          {categories.slice(0, 4).map((category, index) => (
            <Link key={index} to="/categories" className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <div className="category-terms-count">{category.terms.length}+ terms</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="learning-tips">
        <div className="tip-card">
          <div className="tip-icon">💡</div>
          <div className="tip-content">
            <h3>Learning Tip</h3>
            <p>Study for 15-20 minutes daily for better retention. Consistency beats intensity!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;