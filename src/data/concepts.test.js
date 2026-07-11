import { concepts, getConcept } from './concepts';

test('all concept ids are unique', () => {
  const ids = concepts.map((c) => c.id);
  expect(new Set(ids).size).toBe(ids.length);
});

test('every concept has the fields ConceptPage/FeedPage rely on', () => {
  for (const c of concepts) {
    expect(c.id).toBeTruthy();
    expect(c.title).toBeTruthy();
    expect(c.category).toBeTruthy();
    expect(c.illustration).toBeTruthy();
    expect(Array.isArray(c.color)).toBe(true);
    expect(Array.isArray(c.definition)).toBe(true);
    expect(Array.isArray(c.keyPoints)).toBe(true);
    expect(Array.isArray(c.deepDive)).toBe(true);
  }
});

test('Value at Risk and Expected Shortfall are present and cross-linked', () => {
  const varConcept = getConcept('value-at-risk');
  const esConcept = getConcept('expected-shortfall');

  expect(varConcept).toBeTruthy();
  expect(esConcept).toBeTruthy();
  expect(varConcept.category).toBe('risk');
  expect(esConcept.category).toBe('risk');
  expect(varConcept.illustration).toBe('distribution');
  expect(esConcept.illustration).toBe('distribution');
  expect(varConcept.related).toContain('expected-shortfall');
  expect(esConcept.related).toContain('value-at-risk');
});
