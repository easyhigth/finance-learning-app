import { vocab, buildFeed } from './vocab';
import { concepts } from './concepts';
import { glossary } from './glossary';

test('buildFeed interleaves concepts, vocab, and glossary terms without duplicating a term already in vocab', () => {
  const feed = buildFeed(concepts, null);
  const kinds = new Set(feed.map((item) => item.kind));
  expect(kinds).toEqual(new Set(['concept', 'vocab', 'term']));

  const vocabTerms = new Set(vocab.map((v) => v.term.trim().toLowerCase()));
  const termCards = feed.filter((item) => item.kind === 'term');
  for (const card of termCards) {
    expect(vocabTerms.has(card.data.term.trim().toLowerCase())).toBe(false);
  }

  // Every non-duplicate glossary entry should be reachable from the feed.
  const dedupedGlossaryCount = glossary.filter(
    (g) => !vocabTerms.has(g.term.trim().toLowerCase())
  ).length;
  expect(termCards.length).toBe(dedupedGlossaryCount);
});

test('buildFeed restricts all three streams to a single category', () => {
  const feed = buildFeed(concepts, 'foundations');
  for (const item of feed) {
    const category = item.kind === 'concept' ? item.data.category : item.data.category;
    expect(category).toBe('foundations');
  }
});
