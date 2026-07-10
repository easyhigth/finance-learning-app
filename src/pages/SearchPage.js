import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { searchConcepts, concepts, getCategory } from '../data/concepts';
import { searchGlossary } from '../data/glossary';
import './SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [submitted, setSubmitted] = useState(''); // the last query actually searched

  const runSearch = (query) => {
    const q = (query || '').trim();
    setSubmitted(q);
  };

  const handleSearch = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    runSearch(searchTerm);
  };

  // Live results as the user types — no need to hit submit.
  const activeQuery = submitted || searchTerm.trim();
  const results = useMemo(() => {
    if (!activeQuery) return null;
    return {
      concepts: searchConcepts(activeQuery),
      terms: searchGlossary(activeQuery),
    };
  }, [activeQuery]);

  // De-duplicate vocabulary terms already covered as a top concept result,
  // so we don't show the "Fund" fiche twice (once as a concept, once as a term).
  const conceptIds = useMemo(
    () => new Set((results?.concepts || []).map((c) => c.id)),
    [results]
  );
  const vocabTerms = useMemo(
    () => (results?.terms || []).filter((t) => !t.conceptId || !conceptIds.has(t.conceptId)),
    [results, conceptIds]
  );

  // A few hand-picked concepts as quick-start chips
  const quickPicks = ['compound-interest', 'time-value-of-money', 'diversification', 'budgeting-50-30-20', 'risk-vs-return', 'swap', 'bond']
    .map((id) => concepts.find((c) => c.id === id))
    .filter(Boolean);

  const wikiLink = (term) =>
    `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(term)}`;

  const totalResults = results ? results.concepts.length + vocabTerms.length : 0;

  return (
    <div className="search-page">
      <div className="search-header">
        <span className="eyebrow">Search</span>
        <h1>Find a concept or term</h1>
        <p>
          Search the full library by name, idea, or vocabulary — in English or French.
          Concepts open a complete single-page explainer; vocabulary terms give you a
          quick fiche with a definition, a link to the deep concept when one exists, and
          a Wikipedia fallback for everything else.
        </p>
      </div>

      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="e.g. compound interest, fond, obligation, swap, hedge…"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSubmitted(''); // resume live mode as the user edits
            }}
            className="search-input"
            autoFocus
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      <div className="content-section">
        {results && (
          <div className="results-block">
            <div className="section-header">
              <h2>Results for &ldquo;{activeQuery}&rdquo;</h2>
              <span className="results-count">
                {totalResults} found
                {results.concepts.length > 0 && ` · ${results.concepts.length} concept${results.concepts.length > 1 ? 's' : ''}`}
                {vocabTerms.length > 0 && ` · ${vocabTerms.length} term${vocabTerms.length > 1 ? 's' : ''}`}
              </span>
            </div>

            {totalResults === 0 && (
              <div className="no-results-search">
                <h3>No match for &ldquo;{activeQuery}&rdquo;</h3>
                <p>The library is curated, so it won&apos;t have everything — but Wikipedia will.</p>
                <a
                  className="wiki-fallback"
                  href={wikiLink(activeQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Search &ldquo;{activeQuery}&rdquo; on Wikipedia ↗
                </a>
              </div>
            )}

            {/* Concept results — full explainers */}
            {results.concepts.length > 0 && (
              <>
                <h3 className="results-subhead">Concepts</h3>
                <div className="results-grid">
                  {results.concepts.map((c) => {
                    const cat = getCategory(c.category);
                    return (
                      <Link key={c.id} to={`/concept/${c.id}`} className="result-card"
                        style={{ borderTop: `3px solid ${c.color[0]}` }}>
                        <div className="result-card-top">
                          <span className="result-card-icon">{c.icon}</span>
                          <span className="result-card-cat">{cat ? cat.name : c.category}</span>
                        </div>
                        <h3>{c.title}</h3>
                        <p>{c.tldr}</p>
                        <span className="result-arrow">→</span>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}

            {/* Vocabulary results — quick fiches */}
            {vocabTerms.length > 0 && (
              <>
                <h3 className="results-subhead">Vocabulary</h3>
                <div className="vocab-grid">
                  {vocabTerms.map((t, i) => {
                    const cat = getCategory(t.category);
                    const related = t.conceptId
                      ? concepts.find((c) => c.id === t.conceptId)
                      : null;
                    return (
                      <div key={`${t.term}-${i}`} className="vocab-card">
                        <div className="vocab-card-top">
                          <span className="vocab-card-term">{t.term}</span>
                          {cat && <span className="vocab-card-cat">{cat.name}</span>}
                        </div>
                        {t.aliases && t.aliases.length > 0 && (
                          <div className="vocab-aliases">
                            {t.aliases.slice(0, 6).map((a) => (
                              <span key={a} className="vocab-alias">{a}</span>
                            ))}
                          </div>
                        )}
                        <p className="vocab-def">{t.def}</p>
                        <div className="vocab-card-actions">
                          {related ? (
                            <Link to={`/concept/${related.id}`} className="vocab-deep-link">
                              <span className="vocab-deep-icon">{related.icon}</span>
                              Open full concept: {related.title}
                              <span className="vocab-deep-arrow">→</span>
                            </Link>
                          ) : (
                            <a
                              className="vocab-deep-link wiki"
                              href={wikiLink(t.term)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read on Wikipedia ↗
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}

        {!results && (
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
              <span className="tip-icon">🇫🇷</span>
              <span>Type in French or English — &ldquo;fond&rdquo; finds the Fund fiche, &ldquo;obligation&rdquo; finds Bond.</span>
            </div>
            <div className="tip">
              <span className="tip-icon">🧠</span>
              <span>Search by idea, not just the exact title — &ldquo;risk&rdquo; finds &ldquo;Risk vs. Return&rdquo;.</span>
            </div>
            <div className="tip">
              <span className="tip-icon">📚</span>
              <span>Two kinds of results: full concepts (with formula, example, deep dive) and quick vocabulary fiches.</span>
            </div>
            <div className="tip">
              <span className="tip-icon">↗</span>
              <span>Terms without a deep concept link straight to Wikipedia, so nothing is ever missing.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;