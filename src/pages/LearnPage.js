import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { concepts, categories, getConceptsByCategory } from '../data/concepts';
import { getLearned, toggleLearned } from '../utils/progress';
import { useLang } from '../utils/lang';
import './LearnPage.css';

const LearnPage = () => {
  const { t } = useLang();
  const [learned, setLearned] = useState(new Set());

  useEffect(() => {
    setLearned(getLearned());
  }, []);

  const total = concepts.length;
  const learnedCount = learned.size;
  const pct = total > 0 ? Math.round((learnedCount / total) * 100) : 0;

  // First unlearned concept = "continue here"
  const next = concepts.find((c) => !learned.has(c.id)) || concepts[0];

  const handleToggle = (id) => {
    toggleLearned(id);
    setLearned(new Set(getLearned()));
  };

  return (
    <div className="learn-page">
      <div className="learn-header">
        <span className="eyebrow">{t('learn_eyebrow')}</span>
        <h1>{t('learn_title')}</h1>
        <p>{learnedCount} of {total} concepts marked learned. Open any concept to read it in full, then check it off.</p>
      </div>

      {/* Progress */}
      <div className="progress-section">
        <div className="progress-header">
          <h2>Overall progress</h2>
          <span className="progress-text">{learnedCount}/{total}</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="progress-percentage">{pct}%</div>
        </div>
        <Link to={`/concept/${next.id}`} className="continue-btn">
          {learnedCount === 0 ? 'Start with ' : 'Continue with '}
          <strong>{next.title}</strong>
          <span className="continue-arrow">→</span>
        </Link>
      </div>

      {/* Categories with per-track progress */}
      <div className="categories-section">
        <div className="section-header">
          <h2>Tracks</h2>
          <Link to="/categories" className="view-all">All categories</Link>
        </div>
        <div className="categories-grid">
          {categories.map((cat) => {
            const terms = getConceptsByCategory(cat.id);
            const done = terms.filter((t) => learned.has(t.id)).length;
            const trackPct = Math.round((done / terms.length) * 100);
            return (
              <Link key={cat.id} to={`/category/${cat.id}`} className="category-card track-card">
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>{terms.length} concepts · {done} learned</p>
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
          <h2>All concepts</h2>
        </div>
        <div className="all-concepts-grid">
          {concepts.map((c) => {
            const isLearned = learned.has(c.id);
            return (
              <Link
                key={c.id}
                to={`/concept/${c.id}`}
                className={`concept-tile ${isLearned ? 'learned' : ''}`}
                style={{ background: isLearned ? undefined : `linear-gradient(135deg, ${c.color[0]}, ${c.color[1]})` }}
              >
                <span className="concept-tile-icon">{c.icon}</span>
                <span className="concept-tile-name">{c.title}</span>
                <span className={`concept-tile-check ${isLearned ? 'on' : ''}`} onClick={(e) => { e.preventDefault(); handleToggle(c.id); }} title={isLearned ? 'Mark as not learned' : 'Mark as learned'}>
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
            <h3>How to use this</h3>
            <p>Scroll the Discover feed for a TikTok-style tour, or open any concept above for the full single-page explainer. Mark concepts learned to track your path.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;