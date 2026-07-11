import React from 'react';
import { Link } from 'react-router-dom';
import { concepts, getCategory, localizeConcept, localizeCategory } from '../data/concepts';
import { vocab, localizeVocabItem } from '../data/vocab';
import { glossary, localizeGlossaryEntry } from '../data/glossary';
import { getFavorites, useFavoritesCount } from '../utils/favorites';
import { useLang } from '../utils/lang';
import FavoriteStar from '../components/FavoriteStar';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { lang, t } = useLang();
  const count = useFavoritesCount();
  const favs = getFavorites();

  const favConcepts = concepts.filter((c) => favs.has(c.id));
  const favVocab = vocab.filter((v) => favs.has(v.id));
  const favGlossary = glossary.filter((g) => favs.has('g:' + g.term));

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <span className="eyebrow">{t('fav_eyebrow')}</span>
        <h1>{t('fav_title')}</h1>
        <p>{t('fav_sub')}</p>
      </div>

      {count === 0 ? (
        <div className="fav-empty">
          <div className="fav-empty-emoji">⭐</div>
          <h2>{t('fav_empty_title')}</h2>
          <p>{t('fav_empty_sub')}</p>
          <div className="fav-empty-actions">
            <Link to="/" className="fav-empty-btn primary">{t('fav_empty_discover')}</Link>
            <Link to="/search" className="fav-empty-btn">{t('fav_empty_search')}</Link>
          </div>
        </div>
      ) : (
        <div className="favorites-content">
          {favConcepts.length > 0 && (
            <section className="fav-section">
              <div className="fav-section-head">
                <h2>{t('fav_concepts')}</h2>
                <span className="fav-count">{favConcepts.length}</span>
              </div>
              <div className="fav-grid">
                {favConcepts.map((rawC) => {
                  const c = localizeConcept(rawC, lang);
                  const cat = localizeCategory(getCategory(c.category), lang);
                  return (
                    <Link key={c.id} to={`/concept/${c.id}`} className="fav-card">
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
                <h2>{t('fav_vocabulary')}</h2>
                <span className="fav-count">{favVocab.length}</span>
              </div>
              <div className="fav-vocab-grid">
                {favVocab.map((rawV) => {
                  const v = localizeVocabItem(rawV, lang);
                  const cat = localizeCategory(getCategory(v.category), lang);
                  const related = v.conceptId ? localizeConcept(concepts.find((c) => c.id === v.conceptId), lang) : null;
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
                          {related.icon} {t('open_full')}: {related.title} →
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
                <h2>{t('fav_terms')}</h2>
                <span className="fav-count">{favGlossary.length}</span>
              </div>
              <div className="fav-vocab-grid">
                {favGlossary.map((rawG) => {
                  const g = localizeGlossaryEntry(rawG, lang);
                  const cat = localizeCategory(getCategory(g.category), lang);
                  const related = g.conceptId ? localizeConcept(concepts.find((c) => c.id === g.conceptId), lang) : null;
                  return (
                    <div key={rawG.term} className="fav-vocab-card">
                      <div className="fav-vocab-top">
                        <span className="fav-vocab-term">{g.term}</span>
                        <FavoriteStar id={'g:' + rawG.term} className="fav-card-star" />
                      </div>
                      {cat && <span className="fav-vocab-cat">{cat.name}</span>}
                      <p>{g.def}</p>
                      {related && (
                        <Link to={`/concept/${related.id}`} className="fav-vocab-link">
                          {related.icon} {t('open_full')}: {related.title} →
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