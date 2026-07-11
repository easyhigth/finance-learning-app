import React, { useState, useMemo } from 'react';
import { wordcards, filterWordcards } from '../data/wordcards';
import { useLang } from '../utils/lang';
import './WordsPage.css';

const PAGE = 24; // cards revealed per "show more"

const WordsPage = () => {
  const { lang, t } = useLang();
  const [query, setQuery] = useState('');
  const [shown, setShown] = useState(PAGE);

  const filtered = useMemo(() => filterWordcards(query, lang), [query, lang]);

  // Reset pagination when the filter or language changes.
  const onQuery = (q) => { setQuery(q); setShown(PAGE); };
  const onLang = () => setShown(PAGE);

  // Re-run when lang changes (useLang triggers re-render; reset pagination).
  React.useEffect(onLang, [lang]);

  const visible = filtered.slice(0, shown);
  const remaining = filtered.length - visible.length;

  return (
    <div className="words-page">
      <div className="words-header">
        <span className="eyebrow">{t('words_eyebrow')}</span>
        <h1>{t('words_title')}</h1>
        <p>{t('words_sub')}</p>
      </div>

      <div className="words-toolbar">
        <div className="words-filter">
          <span className="words-filter-icon">🔍</span>
          <input
            type="text"
            placeholder={t('words_filter_ph')}
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            className="words-filter-input"
            aria-label={t('words_filter')}
          />
        </div>
        <span className="words-count">{filtered.length} {t('words_count')}</span>
      </div>

      {filtered.length === 0 ? (
        <div className="words-empty">{t('words_empty')}</div>
      ) : (
        <div className="words-list">
          {visible.map((c) => (
            <article key={c.id} className="word-card">
              <h2 className="word-term">{c[lang].term}</h2>
              <p className="word-def">{c[lang].def}</p>
            </article>
          ))}
        </div>
      )}

      {remaining > 0 && (
        <div className="words-more-wrap">
          <button className="words-more" onClick={() => setShown((s) => s + PAGE)}>
            {lang === 'fr' ? `Afficher ${Math.min(PAGE, remaining)} de plus` : `Show ${Math.min(PAGE, remaining)} more`}
            <span className="words-more-count">({remaining} {lang === 'fr' ? 'restants' : 'left'})</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default WordsPage;