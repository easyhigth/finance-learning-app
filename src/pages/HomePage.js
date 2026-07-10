import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <div className="logo-placeholder">💰</div>
          <h1>Finance Learning App</h1>
          <p className="subtitle">Master finance concepts like a pro with our interactive learning platform</p>

          <Link to="/learn" className="cta-button">
            Start Learning Now
          </Link>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Comprehensive Content</h3>
          <p>Access to all finance concepts from Wikipedia and curated lessons</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎮</div>
          <h3>Interactive Learning</h3>
          <p>Engaging quizzes and exercises like Duolingo for finance education</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <h3>Mobile Friendly</h3>
          <p>Learn anytime, anywhere on any device with our PWA app</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Track Progress</h3>
          <p>Monitor your learning journey with detailed progress tracking</p>
        </div>
      </div>

      <div className="categories-preview">
        <h2>Explore Finance Categories</h2>
        <div className="categories-grid">
          <Link to="/categories" className="category-item">Banking</Link>
          <Link to="/categories" className="category-item">Investment</Link>
          <Link to="/categories" className="category-item">Financial Markets</Link>
          <Link to="/categories" className="category-item">Corporate Finance</Link>
          <Link to="/categories" className="category-item">Personal Finance</Link>
          <Link to="/categories" className="category-item">Risk Management</Link>
        </div>
        <Link to="/categories" className="view-all-button">View All Categories</Link>
      </div>
    </div>
  );
};

export default HomePage;