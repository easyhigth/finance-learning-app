// The store keeps an in-memory cache alongside localStorage, so each test
// re-requires the module fresh (via jest.isolateModules) after clearing
// storage, to avoid state leaking between tests.
beforeEach(() => {
  window.localStorage.clear();
});

const freshProgress = () => {
  let mod;
  jest.isolateModules(() => {
    mod = require('./progress');
  });
  return mod;
};

test('starts with no learned items', () => {
  const { getLearned, isLearned } = freshProgress();
  expect(getLearned().size).toBe(0);
  expect(isLearned('roi')).toBe(false);
});

test('toggleLearned marks and unmarks an id, persisting across getLearned calls', () => {
  const { toggleLearned, isLearned, countLearned } = freshProgress();

  expect(toggleLearned('roi')).toBe(true);
  expect(isLearned('roi')).toBe(true);
  expect(countLearned()).toBe(1);

  expect(toggleLearned('roi')).toBe(false);
  expect(isLearned('roi')).toBe(false);
  expect(countLearned()).toBe(0);
});

test('subscribeLearned notifies listeners on toggle and unsubscribes cleanly', () => {
  const { toggleLearned, subscribeLearned } = freshProgress();
  const listener = jest.fn();
  const unsubscribe = subscribeLearned(listener);

  toggleLearned('bond');
  expect(listener).toHaveBeenCalledTimes(1);

  unsubscribe();
  toggleLearned('bond');
  expect(listener).toHaveBeenCalledTimes(1);
});

test('getLearned returns a fresh Set copy, not a shared reference', () => {
  const { toggleLearned, getLearned } = freshProgress();
  toggleLearned('roi');
  const a = getLearned();
  a.add('should-not-persist');
  const b = getLearned();
  expect(b.has('should-not-persist')).toBe(false);
});
