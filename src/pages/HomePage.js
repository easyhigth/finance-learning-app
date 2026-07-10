import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import './HomePage.css';

const HomePage = () => {
  // These would come from user data in a real app
  const progress = 12;
  const totalLessons = 48;

  return (
    <div className="home-page">
      <section className="hero-section">
        <h2>Master Finance Concepts</h2>
        <p>Learn finance terms, theories, and calculations with our interactive platform</p>
        <Link to="/learn" className="cta-button">Start Learning Now</Link>
      </section>

      <section className="progress-section">
        <h3>Your Learning Progress</h3>
        <ProgressBar progress={progress} total={totalLessons} />
        <p className="progress-text">
          You've completed {progress} out of {totalLessons} lessons. Keep going!
        </p>
      </section>

      <section className="features-section">
        <h3>Why Learn with Us?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h4>Comprehensive Content</h4>
            <p>Access to all finance concepts from Wikipedia and our curated lessons</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎮</div>
            <h4>Interactive Learning</h4>
            <p>Engaging quizzes and exercises like Duolingo for finance education</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h4>Mobile Friendly</h4>
            <p>Learn anytime, anywhere on any device with our PWA app</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h4>Track Progress</h4>
            <p>Monitor your learning journey with detailed progress tracking</p>
          </div>
        </div>
      </section>

      <section className="categories-preview">
        <h3>Explore Finance Categories</h3>
        <div className="categories-list">
          <Link to="/categories" className="category-preview">Banking</Link>
          <Link to="/categories" className="category-preview">Investment</Link>
          <Link to="/categories" className="category-preview">Financial Markets</Link>
          <Link to="/categories" className="category-preview">Corporate Finance</Link>
          <Link to="/categories" className="category-preview">Personal Finance</Link>
        </div>
        <Link to="/categories" className="view-all-link">View All Categories</Link>
      </section>
    </div>
  );
};

export default HomePage;