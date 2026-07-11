import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { concepts, categories, getCategory, localizeConcept, localizeCategory } from '../data/concepts';
import { buildFeed, localizeVocabItem } from '../data/vocab';
import { localizeGlossaryEntry } from '../data/glossary';
import { getFavorites } from '../utils/favorites';
import { shuffle } from '../utils/shuffle';
import { useLang } from '../utils/lang';
import Illustration from '../components/Illustration';
import FavoriteStar from '../components/FavoriteStar';
import './FeedPage.css';

// Terminal theme: every card shares the same black/orange treatment
// instead of a per-concept color, so the icon illustration uses a fixed
// amber duotone rather than each concept's individual color pair.
const TERMINAL_COLORS = ['#ffd400', '#ffe066'];

const FeedPage = () => {
  const { catId } = useParams();
  const navigate = useNavigate();
  const { lang, t } = useLang();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isFavMode = catId === 'favorites';
  const activeCat = isFavMode
    ? { name: t('nav_favorites'), icon: '⭐' }
    : (catId ? localizeCategory(getCategory(catId), lang) : null);

  // Every time this feed is (re)entered — including on a fresh page load —
  // the order is reshuffled, so no two sessions look the same and nothing
  // gets stuck being "first". The dedicated Favorites view is the one
  // exception: it stays in a stable order since it's a deliberately curated
  // list, not something to rediscover at random.
  const list = useMemo(() => {
    const favMode = catId === 'favorites';
    const built = buildFeed(concepts, favMode ? null : catId);
    if (favMode) {
      const favs = getFavorites();
      return built.filter((item) => favs.has(item.id));
    }
    return shuffle(built);
  }, [catId]);

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

  // Reset to the top whenever a fresh (reshuffled) list arrives.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: 0 });
    setActiveIndex(0);
  }, [list]);

  const openConcept = (id) => navigate(`/concept/${id}`);
  const progress = list.length > 1 ? (activeIndex / (list.length - 1)) * 100 : 0;

  // Virtualize: with the glossary folded in, "All" can hold 700+ cards —
  // rendering every slide's DOM at once made first paint take 10+ seconds.
  // Only mount slides near the current position; spacers (sized in the same
  // 100%-of-container units each slide uses) keep scrollHeight/scrollTop math
  // — and therefore scroll-snap behavior — unchanged.
  const WINDOW = 8;
  const windowStart = Math.max(0, activeIndex - WINDOW);
  const windowEnd = Math.min(list.length - 1, activeIndex + WINDOW);
  const windowedList = list
    .slice(windowStart, windowEnd + 1)
    .map((item, offset) => ({ item, i: windowStart + offset }));

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
        {categories.map((rawCat) => {
          const cat = localizeCategory(rawCat, lang);
          return (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className={`feed-pill ${catId === cat.id ? 'active' : ''}`}
            >
              <span className="feed-pill-icon">{cat.icon}</span>
              {cat.name}
            </Link>
          );
        })}
      </div>

      <div className="feed-scroll" ref={scrollRef}>
        {windowStart > 0 && <div className="feed-slide-spacer" style={{ height: `${windowStart * 100}%` }} aria-hidden="true" />}
        {windowedList.map(({ item, i }) => {
          if (item.kind === 'concept') {
            const concept = localizeConcept(item.data, lang);
            const cat = localizeCategory(getCategory(concept.category), lang);
            return (
              <section
                key={concept.id}
                className={`feed-slide ${i === activeIndex ? 'active' : ''}`}
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
                    <Illustration type={concept.illustration} colors={TERMINAL_COLORS} />
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

          if (item.kind === 'term') {
            const term = localizeGlossaryEntry(item.data, lang);
            const cat = localizeCategory(getCategory(term.category), lang);
            const openTerm = term.conceptId
              ? () => openConcept(term.conceptId)
              : () => window.open(
                  `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(item.data.term)}`,
                  '_blank',
                  'noopener noreferrer'
                );
            return (
              <section
                key={item.id}
                className={`feed-slide feed-slide-term ${i === activeIndex ? 'active' : ''}`}
              >
                <div className="feed-slide-overlay" />
                <div className="feed-slide-inner">
                  <div className="feed-slide-top">
                    <span className="feed-chip feed-chip-term">📖 {t('feed_term_chip')} · {cat?.name}</span>
                    <div className="feed-slide-top-right">
                      <FavoriteStar id={term.conceptId || ('g:' + item.data.term)} tone="light" size="sm" className="feed-slide-star" />
                      <span className="feed-counter">{i + 1} / {list.length}</span>
                    </div>
                  </div>

                  <div className="feed-slide-body feed-term-body">
                    <span className="feed-badge feed-badge-term">{cat?.icon || '📖'}</span>
                    <h1 className="feed-title feed-title-term">{term.term}</h1>

                    <div className="feed-vocab-block">
                      <span className="feed-vocab-label">{t('feed_term_def')}</span>
                      <p>{term.def}</p>
                    </div>

                    <button className="feed-open" onClick={openTerm}>
                      {term.conceptId ? t('feed_open') : t('read_wiki')}
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
          const v = localizeVocabItem(item.data, lang);
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
        {windowEnd < list.length - 1 && <div className="feed-slide-spacer" style={{ height: `${(list.length - 1 - windowEnd) * 100}%` }} aria-hidden="true" />}

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

      {list.length <= 80 && (
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
      )}
    </div>
  );
};

export default FeedPage;