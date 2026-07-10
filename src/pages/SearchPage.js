import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchConcepts, concepts } from '../data/concepts';
import './SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null); // null = no search yet

  const handleSearch = (e, overrideQuery) => {
    if (e && e.preventDefault) e.preventDefault();
    const query = (overrideQuery ?? searchTerm).trim();
    if (!query) {
      setResults(null);
      return;
    }
    setResults(searchConcepts(query));
  };

  // A few hand-picked concepts as quick-start chips
  const quickPicks = ['compound-interest', 'time-value-of-money', 'diversification', 'budgeting-50-30-20', 'risk-vs-return']
    .map((id) => concepts.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="search-page">
      <div className="search-header">
        <span className="eyebrow">Search</span>
        <h1>Find a concept</h1>
        <p>Search the curated library by name, idea, or term. Everything opens as a full single-page explainer.</p>
      </div>

      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="e.g. compound interest, inflation, leverage..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            autoFocus
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      <div className="content-section">
        {results ? (
          results.length > 0 ? (
            <div className="results-block">
              <div className="section-header">
                <h2>Results for &ldquo;{searchTerm}&rdquo;</h2>
                <span className="results-count">{results.length} found</span>
              </div>
              <div className="results-grid">
                {results.map((c) => (
                  <Link key={c.id} to={`/concept/${c.id}`} className="result-card"
                    style={{ borderTop: `3px solid ${c.color[0]}` }}>
                    <div className="result-card-top">
                      <span className="result-card-icon">{c.icon}</span>
                      <span className="result-card-cat">{c.category}</span>
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.tldr}</p>
                    <span className="result-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="no-results-search">
              <h3>No concept matches &ldquo;{searchTerm}&rdquo;</h3>
              <p>The library is curated, so it won&apos;t have everything — but Wikipedia will.</p>
              <a
                className="wiki-fallback"
                href={`https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(searchTerm)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Search &ldquo;{searchTerm}&rdquo; on Wikipedia ↗
              </a>
            </div>
          )
        ) : (
          <div className="popular-section">
            <h2>Quick picks</h2>
            <p className="popular-description">Tap a concept to jump straight in.</p>
            <div className="popular-grid">
              {quickPicks.map((c) => (
                <Link key={c.id} to={`/concept/${c.id}`} className="popular-term">
                  <span className="popular-term-icon">{c.icon}</span>
                  <span className="popular-term-name">{c.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="search-tips">
        <div className="tips-content">
          <h3>Search tips</h3>
          <div className="tips-grid">
            <div className="tip">
              <span className="tip-icon">🧠</span>
              <span>Search by idea, not just the exact title — &ldquo;risk&rdquo; finds &ldquo;Risk vs. Return&rdquo;.</span>
            </div>
            <div className="tip">
              <span className="tip-icon">📚</span>
              <span>Each result is a complete explainer: formula, example, deep dive, glossary.</span>
            </div>
            <div className="tip">
              <span className="tip-icon">↗</span>
              <span>If it&apos;s not in the library yet, fall back to Wikipedia from the search results.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;