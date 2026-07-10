import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFinanceCategories } from '../services/wikipediaService';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = getFinanceCategories();

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="categories-page">
      <div className="categories-header">
        <h1>Finance Categories</h1>
        <p>Explore different areas of finance and master key concepts</p>
      </div>

      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="categories-grid">
        {filteredCategories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h2>{category.name}</h2>
            </div>
            <p className="category-description">{category.description}</p>

            <div className="category-terms">
              <h4>Key Terms:</h4>
              <div className="terms-list">
                {category.terms.map((term, index) => (
                  <span key={index} className="term-tag">
                    {term}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/search" className="explore-button">
              Explore {category.name}
            </Link>
          </div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="no-results">
          <h3>No categories found</h3>
          <p>Try a different search term</p>
        </div>
      )}

      <div className="learning-path-section">
        <div className="path-content">
          <h2>Create Your Learning Path</h2>
          <p>Personalized finance education based on your goals</p>
          <div className="path-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-text">Assess your knowledge</div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-text">Choose categories</div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-text">Track progress</div>
            </div>
          </div>
          <Link to="/learn" className="cta-button">Start Your Path</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;