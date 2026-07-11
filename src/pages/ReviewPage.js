import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConcept, localizeConcept } from '../data/concepts';
import { useLearnedSet } from '../utils/progress';
import { useLang } from '../utils/lang';
import { shuffle } from '../utils/shuffle';
import Illustration from '../components/Illustration';
import './ReviewPage.css';

const ReviewPage = () => {
  const { lang, t } = useLang();
  const learned = useLearnedSet();
  const [seed, setSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const deck = useMemo(
    () => shuffle([...learned].map(getConcept).filter(Boolean)).map((c) => localizeConcept(c, lang)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [seed, learned.size, lang]
  );

  const card = deck[index] || null;

  const goTo = (i) => {
    setFlipped(false);
    setIndex(((i % deck.length) + deck.length) % deck.length);
  };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);
  const reshuffle = () => {
    setSeed((s) => s + 1);
    setIndex(0);
    setFlipped(false);
  };

  return (
    <div className="review-page">
      <div className="review-header">
        <span className="eyebrow">{t('review_eyebrow')}</span>
        <h1>{t('review_title')}</h1>
        <p>{t('review_sub')}</p>
      </div>

      {deck.length === 0 ? (
        <div className="review-empty">
          <div className="review-empty-emoji">🗂️</div>
          <h2>{t('review_empty_title')}</h2>
          <p>{t('review_empty_sub')}</p>
          <Link to="/learn" className="review-empty-cta">{t('review_start_learning')}</Link>
        </div>
      ) : (
        <div className="review-deck">
          <div className="review-progress-line">
            <span>{index + 1} / {deck.length}</span>
            <button type="button" className="review-shuffle" onClick={reshuffle}>🔀 {t('review_shuffle')}</button>
          </div>

          <div
            className={`review-card ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped((f) => !f)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setFlipped((f) => !f)}
            aria-label={t('review_flip_hint')}
          >
            <div className="review-card-inner">
              <div className="review-card-face review-card-front">
                <div className="review-card-illustration">
                  <Illustration type={card.illustration} colors={['#ff9500', '#ffb347']} />
                </div>
                <span className="review-card-icon">{card.icon}</span>
                <h2>{card.title}</h2>
                <span className="review-card-hint">{t('review_flip_hint')}</span>
              </div>
              <div className="review-card-face review-card-back">
                <span className="review-card-back-label">{t('concept_in_one_line')}</span>
                <p className="review-card-tldr">{card.tldr}</p>
                {card.formula && (
                  <div className="review-card-formula">{card.formula.expression}</div>
                )}
                <Link to={`/concept/${card.id}`} className="review-card-open" onClick={(e) => e.stopPropagation()}>
                  {t('open_full')} →
                </Link>
              </div>
            </div>
          </div>

          <div className="review-nav">
            <button type="button" className="review-nav-btn" onClick={prev} aria-label="Previous">←</button>
            <button type="button" className="review-nav-btn" onClick={next} aria-label="Next">→</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
