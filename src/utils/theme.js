// Tiny theme (light/dark) store. Persists an explicit user choice to
// localStorage; falls back to the OS preference (prefers-color-scheme)
// when the user has never chosen one, via the CSS media query in index.css.
import { useState, useEffect, useCallback } from 'react';

const KEY = 'financelearn:theme';

export const getStoredTheme = () => {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'dark' || v === 'light' ? v : null;
  } catch {
    return null;
  }
};

const apply = (theme) => {
  const root = document.documentElement;
  if (theme) root.setAttribute('data-theme', theme);
  else root.removeAttribute('data-theme');
};

// Hook: [theme, setTheme]. `theme` is 'light' | 'dark' | null (null = follow OS).
export const useTheme = () => {
  const [theme, setThemeState] = useState(getStoredTheme);

  useEffect(() => {
    apply(theme);
  }, [theme]);

  const setTheme = useCallback((t) => {
    setThemeState(t);
    try {
      if (t) localStorage.setItem(KEY, t);
      else localStorage.removeItem(KEY);
    } catch {
      /* ignore quota / privacy errors */
    }
  }, []);

  const isDark = theme
    ? theme === 'dark'
    : typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;

  const toggle = useCallback(() => setTheme(isDark ? 'light' : 'dark'), [isDark, setTheme]);

  return { theme, isDark, setTheme, toggle };
};
