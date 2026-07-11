import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getConcept, getCategory, getRelatedConcepts, getAdjacent, localizeConcept, localizeCategory } from '../data/concepts';
import { useLearned } from '../utils/progress';
import { useLang } from '../utils/lang';
import Illustration from '../components/Illustration';
import FavoriteStar from '../components/FavoriteStar';
import './ConceptPage.css';

const ConceptPage = () => {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const rawConcept = getConcept(slug);
  const [learned, toggleLearned] = useLearned(rawConcept ? rawConcept.id : null);

  useEffect(() => {
    if (rawConcept) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [rawConcept]);

  if (!rawConcept) {
    return (
      <div className="concept-page concept-missing">
        <div className="concept-missing-inner">
          <div className="concept-missing-emoji">🤔</div>
          <h1>{t('concept_missing_title')}</h1>
          <p>{t('concept_missing_sub')}</p>
          <Link to="/" className="concept-back-home">{t('concept_back_home')}</Link>
        </div>
      </div>
    );
  }

  const concept = localizeConcept(rawConcept, lang);
  const category = localizeCategory(getCategory(concept.category), lang);
  const related = getRelatedConcepts(rawConcept).map((c) => localizeConcept(c, lang));
  const { prev, next } = getAdjacent(rawConcept);
  const prevL = prev ? localizeConcept(prev, lang) : null;
  const nextL = next ? localizeConcept(next, lang) : null;

  return (
    <article className="concept-page">
      {/* Hero */}
      <header
        className="concept-hero"
        style={{ background: `linear-gradient(155deg, ${concept.color[0]}, ${concept.color[1]})` }}
      >
        <div className="concept-hero-overlay" />
        <div className="concept-hero-inner">
          <div className="concept-topbar">
            <Link to={prevL ? `/concept/${prevL.id}` : '/'} className="concept-back">← {prevL ? `${t('concept_previn')}: ${prevL.title}` : t('concept_feed')}</Link>
            <Link to={`/category/${concept.category}`} className="concept-cat-chip">
              {category.icon} {category.name}
            </Link>
          </div>
          <div className="concept-hero-visual">
            <span className="concept-hero-badge">{concept.icon}</span>
            <div className="concept-hero-illustration">
              <Illustration type={concept.illustration} colors={concept.color} />
            </div>
          </div>
          <h1 className="concept-title">{concept.title}</h1>
          <p className="concept-hook">{concept.hook}</p>
        </div>
      </header>

      <div className="concept-body">
        {/* TL;DR */}
        <section className="concept-section concept-tldr">
          <h2 className="concept-h2">{t('concept_in_one_line')}</h2>
          <p className="concept-tldr-text">{concept.tldr}</p>
        </section>

        {/* Definition */}
        <section className="concept-section">
          <h2 className="concept-h2">{t('concept_what')}</h2>
          {concept.definition.map((p, i) => (
            <p key={i} className="concept-p">{p}</p>
          ))}
        </section>

        {/* Key points */}
        <section className="concept-section">
          <h2 className="concept-h2">{t('concept_key')}</h2>
          <ul className="concept-keypoints">
            {concept.keyPoints.map((pt, i) => (
              <li key={i}><span className="concept-kp-bullet">{i + 1}</span>{pt}</li>
            ))}
          </ul>
        </section>

        {/* Formula + example */}
        {(concept.formula || concept.example) && (
          <section className="concept-section concept-formula-block">
            <h2 className="concept-h2">{t('concept_formula')}</h2>
            {concept.formula && (
              <div className="concept-formula-card">
                <div className="concept-formula-expr">{concept.formula.expression}</div>
                <div className="concept-formula-legend">{concept.formula.legend}</div>
                {concept.formula.note && <div className="concept-formula-note">{concept.formula.note}</div>}
              </div>
            )}
            {concept.example && (
              <div className="concept-example">
                <div className="concept-example-scenario">📈 {concept.example.scenario}</div>
                <ol className="concept-example-steps">
                  {concept.example.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
                <div className="concept-example-result">{concept.example.result}</div>
              </div>
            )}
          </section>
        )}

        {/* Deep dive */}
        <section className="concept-section">
          <h2 className="concept-h2">{t('concept_deep')}</h2>
          {concept.deepDive.map((p, i) => (
            <p key={i} className="concept-p">{p}</p>
          ))}
        </section>

        {/* Glossary */}
        {concept.glossary && concept.glossary.length > 0 && (
          <section className="concept-section">
            <h2 className="concept-h2">{t('concept_terms')}</h2>
            <div className="concept-glossary">
              {concept.glossary.map((g, i) => (
                <div key={i} className="concept-glossary-item">
                  <dt>{g.term}</dt>
                  <dd>{g.def}</dd>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Learned + Favorite + Wikipedia */}
        <section className="concept-section concept-actions-row">
          <button
            className={`concept-learned-btn ${learned ? 'on' : ''}`}
            onClick={toggleLearned}
          >
            {learned ? t('concept_marked') : t('concept_mark')}
          </button>
          <FavoriteStar id={concept.id} size="lg" className="concept-fav-star" />
          <a
            className="concept-wiki-link"
            href={`https://en.wikipedia.org/wiki/${encodeURIComponent(concept.title)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('concept_wiki')} ↗
          </a>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="concept-section">
            <h2 className="concept-h2">{t('concept_related')}</h2>
            <div className="concept-related-grid">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/concept/${r.id}`}
                  className="concept-related-card"
                  style={{ background: `linear-gradient(135deg, ${r.color[0]}, ${r.color[1]})` }}
                >
                  <span className="concept-related-icon">{r.icon}</span>
                  <span className="concept-related-name">{r.title}</span>
                  <span className="concept-related-arrow">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Prev / next */}
        <nav className="concept-prevnext">
          {prevL ? (
            <Link to={`/concept/${prevL.id}`} className="concept-pn-link prev">
              <span className="concept-pn-label">← {t('concept_previn')} {category.name}</span>
              <span className="concept-pn-title">{prevL.title}</span>
            </Link>
          ) : <span className="concept-pn-spacer" />}
          {nextL ? (
            <Link to={`/concept/${nextL.id}`} className="concept-pn-link next">
              <span className="concept-pn-label">{t('concept_nextin')} {category.name} →</span>
              <span className="concept-pn-title">{nextL.title}</span>
            </Link>
          ) : <span className="concept-pn-spacer" />}
        </nav>
      </div>
    </article>
  );
};

export default ConceptPage;