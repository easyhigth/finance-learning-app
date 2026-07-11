import React, { useState, useCallback, useMemo, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedPage from './pages/FeedPage';
import { LangContext, getStoredLang, STRINGS } from './utils/lang';
import './App.css';

// Route-level code splitting: only the feed (the landing experience) is
// eagerly bundled — every other page loads on demand, keeping the first
// paint light on slow connections before the service worker can help.
const ConceptPage = lazy(() => import('./pages/ConceptPage'));
const LearnPage = lazy(() => import('./pages/LearnPage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const WordsPage = lazy(() => import('./pages/WordsPage'));
const ReviewPage = lazy(() => import('./pages/ReviewPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const RouteFallback = () => <div className="route-fallback" aria-hidden="true" />;

function LangProvider({ children }) {
  const [lang, setLangState] = useState(getStoredLang);
  const setLang = useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem('financelearn:lang', l); } catch { /* ignore */ }
  }, []);
  const t = useCallback((key, vars) => {
    const entry = STRINGS[key];
    let s = entry ? (entry[lang] || entry.en || key) : key;
    if (vars) {
      for (const k of Object.keys(vars)) {
        s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
      }
    }
    return s;
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

function App() {
  const { pathname } = useLocation();
  // The feed is a full-screen scroll experience — no footer there.
  const isFeed = pathname === '/' || pathname.startsWith('/category');

  return (
    <LangProvider>
      <div className="App">
        <Header />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/category/:catId" element={<FeedPage />} />
            <Route path="/concept/:slug" element={<ConceptPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/words" element={<WordsPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        {!isFeed && <Footer />}
      </div>
    </LangProvider>
  );
}

export default App;