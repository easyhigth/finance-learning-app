// Tiny theme (light/dark) store. Dark is the default look; an explicit
// user choice (via the header toggle) is persisted to localStorage and
// always wins over that default.
import { useState, useEffect, useCallback } from 'react';

const KEY = 'financelearn:theme';
const DEFAULT_THEME = 'dark';

export const getStoredTheme = () => {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'dark' || v === 'light' ? v : null;
  } catch {
    return null;
  }
};

const apply = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
};

// Hook: { theme, isDark, setTheme, toggle }. `theme` is always 'light' | 'dark'.
export const useTheme = () => {
  const [theme, setThemeState] = useState(() => getStoredTheme() || DEFAULT_THEME);

  useEffect(() => {
    apply(theme);
  }, [theme]);

  const setTheme = useCallback((t) => {
    setThemeState(t);
    try {
      localStorage.setItem(KEY, t);
    } catch {
      /* ignore quota / privacy errors */
    }
  }, []);

  const isDark = theme === 'dark';
  const toggle = useCallback(() => setTheme(isDark ? 'light' : 'dark'), [isDark, setTheme]);

  return { theme, isDark, setTheme, toggle };
};
