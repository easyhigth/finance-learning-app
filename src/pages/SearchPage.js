import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { searchConcepts, concepts, getCategory } from '../data/concepts';
import { searchGlossary } from '../data/glossary';
import FavoriteStar from '../components/FavoriteStar';
import { useLang } from '../utils/lang';
import { localizeCategory, localizeConcept } from '../utils/localize';
import './SearchPage.css';

const SearchPage = () => {
  const { t, lang } = useLang();
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
    .filter(Boolean)
    .map((c) => localizeConcept(c, lang));

  const wikiLink = (term) =>
    `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(term)}`;

  const totalResults = results ? results.concepts.length + vocabTerms.length : 0;

  return (
    <div className="search-page">
      <div className="search-header">
        <span className="eyebrow">{t('search_eyebrow')}</span>
        <h1>{t('search_title')}</h1>
        <p>{t('search_sub')}</p>
      </div>

      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder={t('search_placeholder')}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSubmitted(''); // resume live mode as the user edits
            }}
            className="search-input"
            autoFocus
          />
          <button type="submit" className="search-button">{t('search_btn')}</button>
        </form>
      </div>

      <div className="content-section">
        {results && (
          <div className="results-block">
            <div className="section-header">
              <h2>{t('results_for')} &ldquo;{activeQuery}&rdquo;</h2>
              <span className="results-count">
                {totalResults} {t('found')}
                {results.concepts.length > 0 && ` · ${results.concepts.length} ${t('concept_s')}`}
                {vocabTerms.length > 0 && ` · ${vocabTerms.length} ${t('term_s')}`}
              </span>
            </div>

            {totalResults === 0 && (
              <div className="no-results-search">
                <h3>{t('no_match')} &ldquo;{activeQuery}&rdquo;</h3>
                <p>{t('no_match_sub')}</p>
                <a
                  className="wiki-fallback"
                  href={wikiLink(activeQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('search_wiki')} &ldquo;{activeQuery}&rdquo; ↗
                </a>
              </div>
            )}

            {/* Concept results — full explainers */}
            {results.concepts.length > 0 && (
              <>
                <h3 className="results-subhead">{t('concepts_sub')}</h3>
                <div className="results-grid">
                  {results.concepts.map((c) => {
                    const lc = localizeConcept(c, lang);
                    const cat = localizeCategory(getCategory(c.category), lang);
                    return (
                      <Link key={lc.id} to={`/concept/${lc.id}`} className="result-card"
                        style={{ borderTop: `3px solid ${lc.color[0]}` }}>
                        <div className="result-card-top">
                          <span className="result-card-icon">{lc.icon}</span>
                          <span className="result-card-cat">{cat ? cat.name : c.category}</span>
                          <FavoriteStar id={lc.id} className="result-card-star" />
                        </div>
                        <h3>{lc.title}</h3>
                        <p>{lc.tldr}</p>
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
                <h3 className="results-subhead">{t('vocab_sub')}</h3>
                <div className="vocab-grid">
                  {vocabTerms.map((t, i) => {
                    const cat = localizeCategory(getCategory(t.category), lang);
                    const related = t.conceptId
                      ? concepts.find((c) => c.id === t.conceptId)
                      : null;
                    return (
                      <div key={`${t.term}-${i}`} className="vocab-card">
                        <div className="vocab-card-top">
                          <span className="vocab-card-term">{t.term}</span>
                          {cat && <span className="vocab-card-cat">{cat.name}</span>}
                          <FavoriteStar id={t.conceptId || ('g:' + t.term)} className="result-card-star" />
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
                              {t('open_full')}: {related.title}
                              <span className="vocab-deep-arrow">→</span>
                            </Link>
                          ) : (
                            <a
                              className="vocab-deep-link wiki"
                              href={wikiLink(t.term)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t('read_wiki')} ↗
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
            <h2>{t('quick_picks')}</h2>
            <p className="popular-description">{t('quick_picks_sub')}</p>
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
          <h3>{t('search_tips')}</h3>
          <div className="tips-grid">
            <div className="tip">
              <span className="tip-icon">🇫🇷</span>
              <span>{t('tip_lang')}</span>
            </div>
            <div className="tip">
              <span className="tip-icon">🧠</span>
              <span>{t('tip_idea')}</span>
            </div>
            <div className="tip">
              <span className="tip-icon">📚</span>
              <span>{t('tip_kinds')}</span>
            </div>
            <div className="tip">
              <span className="tip-icon">↗</span>
              <span>{t('tip_wiki')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;