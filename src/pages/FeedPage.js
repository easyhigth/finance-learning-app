import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { concepts, categories, getCategory } from '../data/concepts';
import { buildFeed } from '../data/vocab';
import Illustration from '../components/Illustration';
import './FeedPage.css';

const FeedPage = () => {
  const { catId } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCat = catId ? getCategory(catId) : null;
  // Interleaved feed: concepts and vocabulary cards alternate.
  const list = buildFeed(concepts, catId);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const h = el.clientHeight;
        setActiveIndex(Math.round(el.scrollTop / h));
        frame = 0;
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [catId]);

  // Reset to top when the list changes
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: 0 });
    setActiveIndex(0);
  }, [catId]);

  const openConcept = (id) => navigate(`/concept/${id}`);
  const progress = list.length > 1 ? (activeIndex / (list.length - 1)) * 100 : 0;

  return (
    <div className="feed-page">
      <div className="feed-progress-bar">
        <div className="feed-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="feed-filters">
        <Link to="/" className={`feed-pill ${!catId ? 'active' : ''}`}>All</Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            className={`feed-pill ${catId === cat.id ? 'active' : ''}`}
          >
            <span className="feed-pill-icon">{cat.icon}</span>
            {cat.name}
          </Link>
        ))}
      </div>

      <div className="feed-scroll" ref={scrollRef}>
        {list.map((item, i) => {
          if (item.kind === 'concept') {
            const concept = item.data;
            const cat = getCategory(concept.category);
            return (
              <section
                key={concept.id}
                className={`feed-slide ${i === activeIndex ? 'active' : ''}`}
                style={{ background: `linear-gradient(160deg, ${concept.color[0]}, ${concept.color[1]})` }}
              >
                <div className="feed-slide-overlay" />
                <div className="feed-slide-inner">
                  <div className="feed-slide-top">
                    <span className="feed-chip">{cat?.icon} {cat?.name}</span>
                    <span className="feed-counter">{i + 1} / {list.length}</span>
                  </div>

                  <div className="feed-illustration">
                    <Illustration type={concept.illustration} colors={concept.color} />
                  </div>

                  <div className="feed-slide-body">
                    <span className="feed-badge">{concept.icon}</span>
                    <h1 className="feed-title">{concept.title}</h1>
                    <p className="feed-hook">{concept.hook}</p>

                    <div className="feed-preview">
                      <span className="feed-preview-label">In one line</span>
                      <p>{concept.tldr}</p>
                    </div>

                    <button className="feed-open" onClick={() => openConcept(concept.id)}>
                      Open full concept
                      <span className="feed-open-arrow">→</span>
                    </button>
                  </div>

                  {i < list.length - 1 && (
                    <div className="feed-swipe-cue" aria-hidden="true">
                      <span>Scroll for more</span>
                      <span className="feed-swipe-arrow">↑</span>
                    </div>
                  )}
                </div>
              </section>
            );
          }

          // Vocabulary card slide
          const v = item.data;
          const cat = getCategory(v.category);
          const open = v.conceptId
            ? () => openConcept(v.conceptId)
            : () => window.open(
                `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(v.term)}`,
                '_blank',
                'noopener noreferrer'
              );
          return (
            <section
              key={v.id}
              className={`feed-slide feed-slide-vocab ${i === activeIndex ? 'active' : ''}`}
              style={{ background: `linear-gradient(160deg, ${v.color[0]}, ${v.color[1]})` }}
            >
              <div className="feed-slide-overlay" />
              <div className="feed-slide-inner">
                <div className="feed-slide-top">
                  <span className="feed-chip feed-chip-vocab">📚 Vocabulaire · {cat?.name}</span>
                  <span className="feed-counter">{i + 1} / {list.length}</span>
                </div>

                <div className="feed-slide-body feed-vocab-body">
                  <span className="feed-badge feed-badge-vocab">{v.icon}</span>
                  <h1 className="feed-title feed-title-vocab">{v.term}</h1>

                  <div className="feed-vocab-block">
                    <span className="feed-vocab-label">En simple</span>
                    <p>{v.simple}</p>
                  </div>

                  <div className="feed-vocab-block">
                    <span className="feed-vocab-label">Exemple</span>
                    <p>{v.example}</p>
                  </div>

                  <div className="feed-vocab-remember">
                    <span className="feed-vocab-label">Pour retenir</span>
                    <p>{v.remember}</p>
                  </div>

                  <button className="feed-open" onClick={open}>
                    {v.conceptId ? 'Open full concept' : 'Read on Wikipedia'}
                    <span className="feed-open-arrow">→</span>
                  </button>
                </div>

                {i < list.length - 1 && (
                  <div className="feed-swipe-cue" aria-hidden="true">
                    <span>Scroll for more</span>
                    <span className="feed-swipe-arrow">↑</span>
                  </div>
                )}
              </div>
            </section>
          );
        })}

        <section className="feed-slide feed-end">
          <div className="feed-end-inner">
            <div className="feed-end-emoji">🎉</div>
            <h2>You&apos;ve seen them all</h2>
            <p>{activeCat ? `That was every concept and term in ${activeCat.name}.` : 'That was the whole library — concepts and vocabulary.'} Keep learning by opening any item, or jump to a category.</p>
            <div className="feed-end-actions">
              <Link to="/" className="feed-end-btn primary">All concepts</Link>
              <Link to="/categories" className="feed-end-btn">Browse categories</Link>
            </div>
          </div>
        </section>
      </div>

      <div className="feed-dots" aria-hidden="true">
        {list.map((item, i) => (
          <span
            key={item.id}
            className={`feed-dot ${i === activeIndex ? 'active' : ''} ${item.kind === 'vocab' ? 'feed-dot-vocab' : ''}`}
            onClick={() => {
              const el = scrollRef.current;
              if (el) el.scrollTo({ top: i * el.clientHeight, behavior: 'smooth' });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;