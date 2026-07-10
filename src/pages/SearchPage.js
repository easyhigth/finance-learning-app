import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import LessonCard from '../components/LessonCard/LessonCard';
import { searchFinanceTerms, fetchFinanceTerm } from '../services/wikipediaService';
import './SearchPage.css';

const SearchPage = ({ searchResults, setSearchResults, setSelectedTerm }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchFinanceTerms(query);
      setSearchResults(results);
    } catch (err) {
      setError('Failed to search terms. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleTermClick = async (termTitle) => {
    try {
      const termData = await fetchFinanceTerm(termTitle);
      setSelectedTerm(termData);
      navigate(`/term/${encodeURIComponent(termTitle)}`);
    } catch (err) {
      console.error('Failed to fetch term details:', err);
    }
  };

  return (
    <div className="search-page">
      <h2>Search Finance Terms</h2>
      <SearchBar onSearch={handleSearch} />

      {loading && <div className="loading">Searching...</div>}
      {error && <div className="error">{error}</div>}

      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
          <div className="results-list">
            {searchResults.map((result, index) => (
              <LessonCard
                key={index}
                title={result.title}
                description={`Click to learn about ${result.title}`}
                onClick={() => handleTermClick(result.title)}
              />
            ))}
          </div>
        </div>
      )}

      {searchResults.length === 0 && !loading && (
        <div className="search-hint">
          <p>Enter a finance term above to search Wikipedia's database</p>
          <p>Try terms like: "Stock market", "Inflation", "Compound interest", "Derivative"</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;