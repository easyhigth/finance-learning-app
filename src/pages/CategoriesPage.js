import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, getConceptsByCategory } from '../data/concepts';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const enriched = categories.map((cat) => ({
    ...cat,
    terms: getConceptsByCategory(cat.id),
  }));

  const filtered = enriched.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.blurb.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.terms.some((t) => t.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="categories-page">
      <div className="categories-header">
        <span className="eyebrow">Browse</span>
        <h1>Finance Categories</h1>
        <p>Pick a track and scroll through every concept in it — each one opens a full single-page explainer.</p>
      </div>

      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search categories or concepts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="categories-grid">
        {filtered.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h2>{category.name}</h2>
            </div>
            <p className="category-description">{category.blurb}</p>

            <div className="category-terms">
              <h4>{category.terms.length} concepts</h4>
              <div className="terms-list">
                {category.terms.map((term) => (
                  <Link key={term.id} to={`/concept/${term.id}`} className="term-tag">
                    {term.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to={`/category/${category.id}`} className="explore-button">
              Scroll this track →
            </Link>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">
          <h3>No matches</h3>
          <p>Nothing fits "{searchTerm}" — try a broader word.</p>
        </div>
      )}

      <div className="learning-path-section">
        <div className="path-content">
          <h2>Not sure where to start?</h2>
          <p>Foundations first — the five ideas every other concept leans on.</p>
          <div className="path-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-text">Foundations</div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-text">Investing</div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-text">Personal</div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-text">Risk</div>
            </div>
          </div>
          <Link to="/category/foundations" className="cta-button">Start with Foundations →</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;