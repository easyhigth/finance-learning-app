import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchFinanceTerms, getPopularFinanceTerms } from '../services/wikipediaService';
import './SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const results = await searchFinanceTerms(searchTerm);
      setSearchResults(results);
    } catch (err) {
      setError('Failed to search terms. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleTermClick = (termTitle) => {
    // Navigate to term detail page
    navigate(`/term/${encodeURIComponent(termTitle)}`);
  };

  const popularTerms = getPopularFinanceTerms();

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Search Finance Terms</h1>
        <p>Find any finance concept, theory, or term from our comprehensive database</p>
      </div>

      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for finance terms (e.g., 'Compound interest', 'Stock market')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}
      </div>

      <div className="content-section">
        {searchResults.length > 0 ? (
          <div className="results-section">
            <div className="section-header">
              <h2>Search Results for "{searchTerm}"</h2>
              <span className="results-count">{searchResults.length} results</span>
            </div>
            <div className="results-grid">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="result-card"
                  onClick={() => handleTermClick(result.title)}
                >
                  <h3>{result.title}</h3>
                  <p>Click to learn more about this finance term</p>
                  <div className="result-arrow">→</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="popular-section">
            <h2>Popular Finance Terms</h2>
            <p className="popular-description">Start learning with these essential finance concepts</p>
            <div className="popular-grid">
              {popularTerms.map((term, index) => (
                <div
                  key={index}
                  className="popular-term"
                  onClick={() => {
                    setSearchTerm(term);
                    // Simulate search
                    setTimeout(() => {
                      handleSearch({ preventDefault: () => {} });
                    }, 100);
                  }}
                >
                  {term}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="search-tips">
        <div className="tips-content">
          <h3>Search Tips</h3>
          <div className="tips-grid">
            <div className="tip">
              <span className="tip-icon">🔍</span>
              <span>Try broad terms like "investment" or "banking"</span>
            </div>
            <div className="tip">
              <span className="tip-icon">📝</span>
              <span>Use specific terms like "compound interest formula"</span>
            </div>
            <div className="tip">
              <span className="tip-icon">📚</span>
              <span>All content sourced from Wikipedia for accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;