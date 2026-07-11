beforeEach(() => {
  window.localStorage.clear();
});

const freshFavorites = () => {
  let mod;
  jest.isolateModules(() => {
    mod = require('./favorites');
  });
  return mod;
};

test('starts with no favorites', () => {
  const { getFavorites, isFavorite } = freshFavorites();
  expect(getFavorites().size).toBe(0);
  expect(isFavorite('swap')).toBe(false);
});

test('toggleFavorite adds and removes an id', () => {
  const { toggleFavorite, isFavorite, countFavorites } = freshFavorites();

  expect(toggleFavorite('swap')).toBe(true);
  expect(isFavorite('swap')).toBe(true);
  expect(countFavorites()).toBe(1);

  expect(toggleFavorite('swap')).toBe(false);
  expect(isFavorite('swap')).toBe(false);
  expect(countFavorites()).toBe(0);
});

test('concept and vocab ids are tracked independently', () => {
  const { toggleFavorite, isFavorite } = freshFavorites();
  toggleFavorite('swap');
  toggleFavorite('v-swap');
  expect(isFavorite('swap')).toBe(true);
  expect(isFavorite('v-swap')).toBe(true);
});
