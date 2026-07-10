import React from 'react';
import { Link } from 'react-router-dom';
import { getFinanceCategories, getSampleFinanceTerms } from '../services/wikipediaService';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const categories = getFinanceCategories();
  const sampleTerms = getSampleFinanceTerms();

  return (
    <div className="categories-page">
      <h2>Finance Categories</h2>
      <p>Browse through different categories of finance topics</p>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <h3>{category}</h3>
            <ul>
              {sampleTerms[category] && sampleTerms[category].slice(0, 3).map((term, termIndex) => (
                <li key={termIndex}>{term}</li>
              ))}
            </ul>
            <Link to="/learn" className="category-link">
              Explore {category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;