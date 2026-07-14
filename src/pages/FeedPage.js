import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { concepts, categories, getCategory } from '../data/concepts';
import { buildFeed } from '../data/vocab';
import { getFavorites } from '../utils/favorites';
import { useLang } from '../utils/lang';
import { localizeCategory, localizeConcept, localizeVocab } from '../utils/localize';
import Illustration from '../components/Illustration';
import FavoriteStar from '../components/FavoriteStar';
import './FeedPage.css';

const FeedPage = () => {
  const { catId } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useLang();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isFavMode = catId === 'favorites';
  const activeCat = isFavMode
    ? { name: t('nav_favorites'), icon: '⭐' }
    : (catId ? localizeCategory(getCategory(catId), lang) : null);

  // Interleaved feed: concepts and vocabulary cards alternate.
  let list = buildFeed(concepts, isFavMode ? null : catId);
  if (isFavMode) {
    const favs = getFavorites();
    list = list.filter((item) => favs.has(item.id));
  }
  // Localize content for the current language (no-op fallback to English when
  // a French translation is missing — see utils/localize.js).
  list = list.map((item) => ({
    ...item,
    data: item.kind === 'concept' ? localizeConcept(item.data, lang) : localizeVocab(item.data, lang),
  }));

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
        <Link to="/" className={`feed-pill ${!catId ? 'active' : ''}`}>{t('feed_all')}</Link>
        <Link to="/category/favorites" className={`feed-pill feed-pill-fav ${isFavMode ? 'active' : ''}`}>
          <span className="feed-pill-icon">★</span>
          {t('nav_favorites')}
        </Link>
        {categories.map((cat) => {
          const lc = localizeCategory(cat, lang);
          return (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className={`feed-pill ${catId === cat.id ? 'active' : ''}`}
            >
              <span className="feed-pill-icon">{lc.icon}</span>
              {lc.name}
            </Link>
          );
        })}
      </div>

      <div className="feed-scroll" ref={scrollRef}>
        {list.map((item, i) => {
          if (item.kind === 'concept') {
            const concept = item.data;
            const cat = localizeCategory(getCategory(concept.category), lang);
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
                    <div className="feed-slide-top-right">
                      <FavoriteStar id={concept.id} tone="light" size="sm" className="feed-slide-star" />
                      <span className="feed-counter">{i + 1} / {list.length}</span>
                    </div>
                  </div>

                  <div className="feed-illustration">
                    <Illustration type={concept.illustration} colors={concept.color} />
                  </div>

                  <div className="feed-slide-body">
                    <span className="feed-badge">{concept.icon}</span>
                    <h1 className="feed-title">{concept.title}</h1>
                    <p className="feed-hook">{concept.hook}</p>

                    <div className="feed-preview">
                      <span className="feed-preview-label">{t('feed_in_one_line')}</span>
                      <p>{concept.tldr}</p>
                    </div>

                    <button className="feed-open" onClick={() => openConcept(concept.id)}>
                      {t('feed_open')}
                      <span className="feed-open-arrow">→</span>
                    </button>
                  </div>

                  {i < list.length - 1 && (
                    <div className="feed-swipe-cue" aria-hidden="true">
                      <span>{t('feed_scroll_more')}</span>
                      <span className="feed-swipe-arrow">↑</span>
                    </div>
                  )}
                </div>
              </section>
            );
          }

          // Vocabulary card slide
          const v = item.data;
          const cat = localizeCategory(getCategory(v.category), lang);
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
                  <span className="feed-chip feed-chip-vocab">📚 {t('feed_vocab_chip')} · {cat?.name}</span>
                  <div className="feed-slide-top-right">
                    <FavoriteStar id={v.id} tone="light" size="sm" className="feed-slide-star" />
                    <span className="feed-counter">{i + 1} / {list.length}</span>
                  </div>
                </div>

                <div className="feed-slide-body feed-vocab-body">
                  <span className="feed-badge feed-badge-vocab">{v.icon}</span>
                  <h1 className="feed-title feed-title-vocab">{v.term}</h1>

                  <div className="feed-vocab-block">
                    <span className="feed-vocab-label">{t('feed_simple')}</span>
                    <p>{v.simple}</p>
                  </div>

                  <div className="feed-vocab-block">
                    <span className="feed-vocab-label">{t('feed_example')}</span>
                    <p>{v.example}</p>
                  </div>

                  <div className="feed-vocab-remember">
                    <span className="feed-vocab-label">{t('feed_remember')}</span>
                    <p>{v.remember}</p>
                  </div>

                  <button className="feed-open" onClick={open}>
                    {v.conceptId ? t('feed_open') : t('read_wiki')}
                    <span className="feed-open-arrow">→</span>
                  </button>
                </div>

                {i < list.length - 1 && (
                  <div className="feed-swipe-cue" aria-hidden="true">
                    <span>{t('feed_scroll_more')}</span>
                    <span className="feed-swipe-arrow">↑</span>
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {isFavMode && list.length === 0 && (
          <section className="feed-slide feed-end">
            <div className="feed-end-inner">
              <div className="feed-end-emoji">⭐</div>
              <h2>{t('feed_fav_empty_title')}</h2>
              <p>{t('feed_fav_empty_sub')}</p>
              <div className="feed-end-actions">
                <Link to="/" className="feed-end-btn primary">{t('fav_empty_discover')}</Link>
                <Link to="/search" className="feed-end-btn">{t('fav_empty_search')}</Link>
              </div>
            </div>
          </section>
        )}

        {!(isFavMode && list.length === 0) && (
        <section className="feed-slide feed-end">
          <div className="feed-end-inner">
            <div className="feed-end-emoji">🎉</div>
            <h2>{t('feed_end_title')}</h2>
            <p>{activeCat ? t('feed_end_cat', { name: activeCat.name }) : t('feed_end_all')} {t('feed_end_keep')}</p>
            <div className="feed-end-actions">
              <Link to="/" className="feed-end-btn primary">{t('feed_all_btn')}</Link>
              <Link to="/categories" className="feed-end-btn">{t('feed_browse')}</Link>
            </div>
          </div>
        </section>
        )}
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