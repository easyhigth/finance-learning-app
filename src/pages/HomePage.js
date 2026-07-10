import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const features = [
    {
      icon: '📚',
      title: 'Comprehensive Content',
      description: 'Access to all finance concepts from Wikipedia and curated lessons'
    },
    {
      icon: '🎮',
      title: 'Interactive Learning',
      description: 'Engaging quizzes and exercises like Duolingo for finance education'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Learn anytime, anywhere on any device with our PWA app'
    },
    {
      icon: '📈',
      title: 'Track Progress',
      description: 'Monitor your learning journey with detailed progress tracking'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Financial Analyst',
      text: 'This app helped me understand complex finance concepts in just 15 minutes a day!'
    },
    {
      name: 'David K.',
      role: 'Investment Banker',
      text: 'The Wikipedia integration makes learning so much more comprehensive than other platforms.'
    },
    {
      name: 'Maria L.',
      role: 'Personal Finance Blogger',
      text: 'Finally, a Duolingo-style app for finance! The progress tracking keeps me motivated.'
    }
  ];

  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Master Finance Concepts Like a Pro</h1>
          <p className="subtitle">Learn finance terms, theories, and calculations with our interactive platform inspired by Duolingo. Access comprehensive knowledge from Wikipedia and structured lessons.</p>

          <div className="hero-buttons">
            <Link to="/learn" className="cta-button primary">
              Start Learning Now
            </Link>
            <Link to="/categories" className="cta-button secondary">
              Explore Categories
            </Link>
          </div>

          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Finance Terms</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Learners</span>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="section-header">
          <h2>Why Choose Finance Learning App?</h2>
          <p>Our unique approach combines the best of Wikipedia and interactive learning</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-section">
        <div className="section-header">
          <h2>What Our Learners Say</h2>
          <p>Join thousands of finance professionals and students</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <span className="author-name">{testimonial.name}</span>
                <span className="author-role">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Master Finance?</h2>
          <p>Join our community of learners and start your journey today</p>
          <Link to="/learn" className="cta-button large">
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;