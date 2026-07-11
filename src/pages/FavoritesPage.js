import React from 'react';
import { Link } from 'react-router-dom';
import { concepts, getCategory } from '../data/concepts';
import { vocab } from '../data/vocab';
import { glossary } from '../data/glossary';
import { getFavorites, useFavoritesCount } from '../utils/favorites';
import FavoriteStar from '../components/FavoriteStar';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const count = useFavoritesCount();
  const favs = getFavorites();

  const favConcepts = concepts.filter((c) => favs.has(c.id));
  const favVocab = vocab.filter((v) => favs.has(v.id));
  const favGlossary = glossary.filter((g) => favs.has('g:' + g.term));

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <span className="eyebrow">★ Favoris</span>
        <h1>Your favorites</h1>
        <p>
          Everything you starred for later — concepts and vocabulary in one place.
          Tap the star on any item to add or remove it.
        </p>
      </div>

      {count === 0 ? (
        <div className="fav-empty">
          <div className="fav-empty-emoji">⭐</div>
          <h2>No favorites yet</h2>
          <p>Star the concepts and terms you want to keep close — they will appear here.</p>
          <div className="fav-empty-actions">
            <Link to="/" className="fav-empty-btn primary">Discover concepts</Link>
            <Link to="/search" className="fav-empty-btn">Search a term</Link>
          </div>
        </div>
      ) : (
        <div className="favorites-content">
          {favConcepts.length > 0 && (
            <section className="fav-section">
              <div className="fav-section-head">
                <h2>Concepts</h2>
                <span className="fav-count">{favConcepts.length}</span>
              </div>
              <div className="fav-grid">
                {favConcepts.map((c) => {
                  const cat = getCategory(c.category);
                  return (
                    <Link key={c.id} to={`/concept/${c.id}`} className="fav-card"
                      style={{ borderTop: `3px solid ${c.color[0]}` }}>
                      <div className="fav-card-top">
                        <span className="fav-card-icon">{c.icon}</span>
                        <span className="fav-card-cat">{cat ? cat.name : c.category}</span>
                        <FavoriteStar id={c.id} className="fav-card-star" />
                      </div>
                      <h3>{c.title}</h3>
                      <p>{c.tldr}</p>
                      <span className="fav-card-arrow">→</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {favVocab.length > 0 && (
            <section className="fav-section">
              <div className="fav-section-head">
                <h2>Vocabulary</h2>
                <span className="fav-count">{favVocab.length}</span>
              </div>
              <div className="fav-vocab-grid">
                {favVocab.map((v) => {
                  const cat = getCategory(v.category);
                  const related = v.conceptId ? concepts.find((c) => c.id === v.conceptId) : null;
                  return (
                    <div key={v.id} className="fav-vocab-card">
                      <div className="fav-vocab-top">
                        <span className="fav-vocab-term">{v.term}</span>
                        <FavoriteStar id={v.id} className="fav-card-star" />
                      </div>
                      {cat && <span className="fav-vocab-cat">{cat.name}</span>}
                      <p>{v.simple}</p>
                      {related && (
                        <Link to={`/concept/${related.id}`} className="fav-vocab-link">
                          {related.icon} Open {related.title} →
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {favGlossary.length > 0 && (
            <section className="fav-section">
              <div className="fav-section-head">
                <h2>Terms</h2>
                <span className="fav-count">{favGlossary.length}</span>
              </div>
              <div className="fav-vocab-grid">
                {favGlossary.map((g) => {
                  const cat = getCategory(g.category);
                  const related = g.conceptId ? concepts.find((c) => c.id === g.conceptId) : null;
                  return (
                    <div key={g.term} className="fav-vocab-card">
                      <div className="fav-vocab-top">
                        <span className="fav-vocab-term">{g.term}</span>
                        <FavoriteStar id={'g:' + g.term} className="fav-card-star" />
                      </div>
                      {cat && <span className="fav-vocab-cat">{cat.name}</span>}
                      <p>{g.def}</p>
                      {related && (
                        <Link to={`/concept/${related.id}`} className="fav-vocab-link">
                          {related.icon} Open {related.title} →
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;