import React from 'react';
import { Link } from 'react-router-dom';
import { concepts, categories, getConceptsByCategory } from '../data/concepts';
import { useLearnedSet, toggleLearned } from '../utils/progress';
import { useLang } from '../utils/lang';
import { localizeConcept, localizeCategory } from '../utils/localize';
import './LearnPage.css';

const LearnPage = () => {
  const { t, lang } = useLang();
  const learned = useLearnedSet();

  const total = concepts.length;
  const learnedCount = learned.size;
  const pct = total > 0 ? Math.round((learnedCount / total) * 100) : 0;

  // First unlearned concept = "continue here"
  const next = localizeConcept(concepts.find((c) => !learned.has(c.id)) || concepts[0], lang);

  const handleToggle = (id) => {
    toggleLearned(id);
  };

  return (
    <div className="learn-page">
      <div className="learn-header">
        <span className="eyebrow">{t('learn_eyebrow')}</span>
        <h1>{t('learn_title')}</h1>
        <p>{t('learn_progress_sub', { done: learnedCount, total })}</p>
      </div>

      {/* Progress */}
      <div className="progress-section">
        <div className="progress-header">
          <h2>{t('learn_overall')}</h2>
          <span className="progress-text">{learnedCount}/{total}</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="progress-percentage">{pct}%</div>
        </div>
        <Link to={`/concept/${next.id}`} className="continue-btn">
          {learnedCount === 0 ? t('learn_start_with') : t('learn_continue_with')}
          <strong>{next.title}</strong>
          <span className="continue-arrow">→</span>
        </Link>
      </div>

      {/* Categories with per-track progress */}
      <div className="categories-section">
        <div className="section-header">
          <h2>{t('learn_tracks')}</h2>
          <Link to="/categories" className="view-all">{t('learn_all_categories')}</Link>
        </div>
        <div className="categories-grid">
          {categories.map((cat) => {
            const lc = localizeCategory(cat, lang);
            const terms = getConceptsByCategory(cat.id);
            const done = terms.filter((t) => learned.has(t.id)).length;
            const trackPct = terms.length > 0 ? Math.round((done / terms.length) * 100) : 0;
            return (
              <Link key={cat.id} to={`/category/${cat.id}`} className="category-card track-card">
                <div className="category-icon">{lc.icon}</div>
                <h3>{lc.name}</h3>
                <p>{terms.length} {t('cat_concepts')} · {done} {t('learn_learned_count')}</p>
                <div className="track-bar">
                  <div className="track-fill" style={{ width: `${trackPct}%` }} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* All concepts */}
      <div className="categories-section">
        <div className="section-header">
          <h2>{t('learn_all_concepts')}</h2>
        </div>
        <div className="all-concepts-grid">
          {concepts.map((c) => {
            const lc = localizeConcept(c, lang);
            const isLearned = learned.has(c.id);
            return (
              <Link
                key={c.id}
                to={`/concept/${c.id}`}
                className={`concept-tile ${isLearned ? 'learned' : ''}`}
                style={{ background: isLearned ? undefined : `linear-gradient(135deg, ${lc.color[0]}, ${lc.color[1]})` }}
              >
                <span className="concept-tile-icon">{lc.icon}</span>
                <span className="concept-tile-name">{lc.title}</span>
                <span className={`concept-tile-check ${isLearned ? 'on' : ''}`} onClick={(e) => { e.preventDefault(); handleToggle(c.id); }} title={isLearned ? t('learn_unmark') : t('learn_mark')}>
                  {isLearned ? '✓' : '○'}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="learning-tips">
        <div className="tip-card">
          <div className="tip-icon">💡</div>
          <div className="tip-content">
            <h3>{t('learn_tip_title')}</h3>
            <p>{t('learn_tip_sub')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;