import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getConcept, getCategory, getRelatedConcepts, getAdjacent } from '../data/concepts';
import { isLearned, toggleLearned } from '../utils/progress';
import Illustration from '../components/Illustration';
import './ConceptPage.css';

const ConceptPage = () => {
  const { slug } = useParams();
  const concept = getConcept(slug);
  const [learned, setLearned] = useState(false);

  useEffect(() => {
    if (concept) {
      setLearned(isLearned(concept.id));
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [concept]);

  if (!concept) {
    return (
      <div className="concept-page concept-missing">
        <div className="concept-missing-inner">
          <div className="concept-missing-emoji">🤔</div>
          <h1>Concept not found</h1>
          <p>We don&apos;t have that one in the library yet.</p>
          <Link to="/" className="concept-back-home">← Back to the feed</Link>
        </div>
      </div>
    );
  }

  const category = getCategory(concept.category);
  const related = getRelatedConcepts(concept);
  const { prev, next } = getAdjacent(concept);

  const handleLearned = () => {
    setLearned(toggleLearned(concept.id));
  };

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
            <Link to={prev ? `/concept/${prev.id}` : '/'} className="concept-back">← {prev ? `Prev: ${prev.title}` : 'Feed'}</Link>
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
          <h2 className="concept-h2">In one line</h2>
          <p className="concept-tldr-text">{concept.tldr}</p>
        </section>

        {/* Definition */}
        <section className="concept-section">
          <h2 className="concept-h2">What it is</h2>
          {concept.definition.map((p, i) => (
            <p key={i} className="concept-p">{p}</p>
          ))}
        </section>

        {/* Key points */}
        <section className="concept-section">
          <h2 className="concept-h2">Key points</h2>
          <ul className="concept-keypoints">
            {concept.keyPoints.map((pt, i) => (
              <li key={i}><span className="concept-kp-bullet">{i + 1}</span>{pt}</li>
            ))}
          </ul>
        </section>

        {/* Formula + example */}
        {(concept.formula || concept.example) && (
          <section className="concept-section concept-formula-block">
            <h2 className="concept-h2">The formula &amp; a worked example</h2>
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
          <h2 className="concept-h2">Going deeper</h2>
          {concept.deepDive.map((p, i) => (
            <p key={i} className="concept-p">{p}</p>
          ))}
        </section>

        {/* Glossary */}
        {concept.glossary && concept.glossary.length > 0 && (
          <section className="concept-section">
            <h2 className="concept-h2">Terms to know</h2>
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

        {/* Learned + Wikipedia */}
        <section className="concept-section concept-actions-row">
          <button
            className={`concept-learned-btn ${learned ? 'on' : ''}`}
            onClick={handleLearned}
          >
            {learned ? '✓ Marked as learned' : 'Mark as learned'}
          </button>
          <a
            className="concept-wiki-link"
            href={`https://en.wikipedia.org/wiki/${encodeURIComponent(concept.title)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read full article on Wikipedia ↗
          </a>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="concept-section">
            <h2 className="concept-h2">Related concepts</h2>
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
          {prev ? (
            <Link to={`/concept/${prev.id}`} className="concept-pn-link prev">
              <span className="concept-pn-label">← Previous in {category.name}</span>
              <span className="concept-pn-title">{prev.title}</span>
            </Link>
          ) : <span className="concept-pn-spacer" />}
          {next ? (
            <Link to={`/concept/${next.id}`} className="concept-pn-link next">
              <span className="concept-pn-label">Next in {category.name} →</span>
              <span className="concept-pn-title">{next.title}</span>
            </Link>
          ) : <span className="concept-pn-spacer" />}
        </nav>
      </div>
    </article>
  );
};

export default ConceptPage;