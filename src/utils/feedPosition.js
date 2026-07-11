// Remembers the last item viewed in each feed (all / a category / favorites)
// so reopening the app resumes where you left off, like a video feed would.
const KEY = 'financelearn:feedPosition';

const readAll = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
};

export const getFeedPosition = (key) => readAll()[key] || null;

export const saveFeedPosition = (key, itemId) => {
  try {
    const all = readAll();
    all[key] = { itemId, ts: Date.now() };
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    /* ignore quota / privacy errors */
  }
};
