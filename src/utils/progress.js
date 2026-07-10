// Tiny personal-progress store backed by localStorage. Not for production
// scale — just so the single-user app remembers what you've learned.

const KEY = 'financelearn:learned';

export const getLearned = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) || '[]'));
  } catch {
    return new Set();
  }
};

export const isLearned = (id) => getLearned().has(id);

export const toggleLearned = (id) => {
  const set = getLearned();
  if (set.has(id)) set.delete(id);
  else set.add(id);
  try {
    localStorage.setItem(KEY, JSON.stringify([...set]));
  } catch {
    /* ignore quota / privacy errors */
  }
  return set.has(id);
};