// Tiny favorites (bookmarks) store backed by localStorage, mirroring progress.js.
// Favorites are stored by item id — concept ids (e.g. "swap") and vocab ids
// (e.g. "v-swap") are distinct, so both kinds can be favorited independently.
import { useState, useEffect, useCallback } from 'react';

const KEY = 'financelearn:favorites';

let cache = null;
const listeners = new Set();

const read = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) || '[]'));
  } catch {
    return new Set();
  }
};

const write = (set) => {
  try {
    localStorage.setItem(KEY, JSON.stringify([...set]));
  } catch {
    /* ignore quota / privacy errors */
  }
};

const ensure = () => {
  if (cache === null) cache = read();
  return cache;
};

const emit = () => listeners.forEach((fn) => fn());

export const getFavorites = () => new Set(ensure());

export const isFavorite = (id) => ensure().has(id);

export const toggleFavorite = (id) => {
  const set = new Set(ensure());
  if (set.has(id)) set.delete(id);
  else set.add(id);
  cache = set;
  write(set);
  emit();
  return set.has(id);
};

export const countFavorites = () => ensure().size;

export const subscribeFavorites = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

// Hook: live "is this id favorited" + toggle, re-renders on any change.
export const useFavorite = (id) => {
  const [on, setOn] = useState(() => isFavorite(id));
  useEffect(() => {
    setOn(isFavorite(id));
    return subscribeFavorites(() => setOn(isFavorite(id)));
  }, [id]);
  const toggle = useCallback(() => setOn(toggleFavorite(id)), [id]);
  return [on, toggle];
};

// Hook: live count of favorites, for header badges.
export const useFavoritesCount = () => {
  const [n, setN] = useState(() => countFavorites());
  useEffect(() => subscribeFavorites(() => setN(countFavorites())), []);
  return n;
};