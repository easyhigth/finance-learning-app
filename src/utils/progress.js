// Tiny personal-progress store backed by localStorage. Not for production
// scale — just so the single-user app remembers what you've learned.
import { useState, useEffect, useCallback } from 'react';

const KEY = 'financelearn:learned';

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

export const getLearned = () => new Set(ensure());

export const isLearned = (id) => ensure().has(id);

export const toggleLearned = (id) => {
  const set = new Set(ensure());
  if (set.has(id)) set.delete(id);
  else set.add(id);
  cache = set;
  write(set);
  emit();
  return set.has(id);
};

export const countLearned = () => ensure().size;

export const subscribeLearned = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

// Hook: live "is this id learned" + toggle, re-renders on any change.
export const useLearned = (id) => {
  const [on, setOn] = useState(() => isLearned(id));
  useEffect(() => {
    setOn(isLearned(id));
    return subscribeLearned(() => setOn(isLearned(id)));
  }, [id]);
  const toggle = useCallback(() => setOn(toggleLearned(id)), [id]);
  return [on, toggle];
};

// Hook: live full learned set, for pages needing the whole picture (e.g. LearnPage).
export const useLearnedSet = () => {
  const [set, setSet] = useState(() => getLearned());
  useEffect(() => subscribeLearned(() => setSet(getLearned())), []);
  return set;
};
