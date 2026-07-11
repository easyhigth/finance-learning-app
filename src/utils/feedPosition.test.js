import { getFeedPosition, saveFeedPosition } from './feedPosition';

beforeEach(() => {
  window.localStorage.clear();
});

test('returns null for a key with no saved position', () => {
  expect(getFeedPosition('all')).toBeNull();
});

test('saves and retrieves a position per feed key independently', () => {
  saveFeedPosition('all', 'roi');
  saveFeedPosition('investing', 'compound-interest');

  expect(getFeedPosition('all').itemId).toBe('roi');
  expect(getFeedPosition('investing').itemId).toBe('compound-interest');
});

test('saving again for the same key overwrites the previous position', () => {
  saveFeedPosition('all', 'roi');
  saveFeedPosition('all', 'inflation');
  expect(getFeedPosition('all').itemId).toBe('inflation');
});
