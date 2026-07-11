import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, getConceptsByCategory, localizeConcept, localizeCategory } from '../data/concepts';
import { useLang } from '../utils/lang';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const { lang, t } = useLang();
  const [searchTerm, setSearchTerm] = useState('');

  const enriched = categories.map((rawCat) => {
    const cat = localizeCategory(rawCat, lang);
    return {
      ...cat,
      terms: getConceptsByCategory(cat.id).map((c) => localizeConcept(c, lang)),
    };
  });

  const filtered = enriched.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.blurb.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.terms.some((t) => t.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="categories-page">
      <div className="categories-header">
        <span className="eyebrow">{t('cat_eyebrow')}</span>
        <h1>{t('cat_title')}</h1>
        <p>{t('cat_sub')}</p>
      </div>

      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder={t('cat_search_ph')}
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
              <h4>{category.terms.length} {t('cat_concepts')}</h4>
              <div className="terms-list">
                {category.terms.map((term) => (
                  <Link key={term.id} to={`/concept/${term.id}`} className="term-tag">
                    {term.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to={`/category/${category.id}`} className="explore-button">
              {t('cat_scroll')} →
            </Link>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">
          <h3>{t('cat_no_matches')}</h3>
          <p>{t('cat_no_matches_sub', { q: searchTerm })}</p>
        </div>
      )}

      <div className="learning-path-section">
        <div className="path-content">
          <h2>{t('cat_path_title')}</h2>
          <p>{t('cat_path_sub')}</p>
          <div className="path-steps">
            {['foundations', 'investing', 'personal', 'risk'].map((id, i) => (
              <div className="step" key={id}>
                <div className="step-number">{i + 1}</div>
                <div className="step-text">{localizeCategory(categories.find((c) => c.id === id), lang)?.name}</div>
              </div>
            ))}
          </div>
          <Link to="/category/foundations" className="cta-button">{t('cat_path_cta')} →</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;