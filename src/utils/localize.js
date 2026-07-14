// Content localization: merges French translations over the English source
// when lang === 'fr'. Falls back to English when a translation is missing,
// so partial translations never break rendering.
import { conceptsFR } from '../data/concepts.fr';
import { vocabFR } from '../data/vocab.fr';
import { glossaryFR } from '../data/glossary.fr';

// Category names + blurbs in French (small, hand-translated).
export const categoriesFR = {
  foundations: { name: 'Fondamentaux', blurb: 'Les idées dont toute personne financièrement lettrée a besoin en premier.' },
  investing: { name: 'Investissement', blurb: 'Comment l’argent croît quand on le met au travail.' },
  markets: { name: 'Marchés', blurb: 'Comment les prix se forment et qui les échange.' },
  personal: { name: 'Finances personnelles', blurb: 'Budgets, crédit, épargne — votre propre argent.' },
  corporate: { name: 'Finance d’entreprise', blurb: 'Comment les entreprises se financent et se gèrent.' },
  banking: { name: 'Banque et crédit', blurb: 'Intérêts, prêts et fonctionnement des banques.' },
  economics: { name: 'Économie', blurb: 'Les grandes forces derrière les prix et la croissance.' },
  risk: { name: 'Risque et comportement', blurb: 'Comment on gère mal l’incertitude.' },
  institutions: { name: 'Institutions financières', blurb: 'Les architectes et gardiens du système financier.' },
  derivatives: { name: 'Dérivés et trading', blurb: 'Outils avancés de couverture, spéculation et découverte des prix.' },
  accounting: { name: 'Comptabilité', blurb: 'Le langage de l’entreprise — comment on enregistre et présente l’argent.' },
  fintech: { name: 'Crypto et fintech', blurb: 'Monnaie numérique, registres et technologie qui refond la finance.' },
};

export const localizeCategory = (cat, lang) => {
  if (lang !== 'fr') return cat;
  const fr = categoriesFR[cat.id];
  if (!fr) return cat;
  return { ...cat, name: fr.name, blurb: fr.blurb };
};

export const localizeConcept = (c, lang) => {
  if (lang !== 'fr') return c;
  const fr = conceptsFR[c.id];
  if (!fr) return c;
  const formula = c.formula
    ? { ...c.formula, legend: fr.formula?.legend ?? c.formula.legend, note: fr.formula?.note ?? c.formula.note }
    : c.formula;
  const example = c.example
    ? { ...c.example, ...(fr.example || {}) }
    : c.example;
  return {
    ...c,
    title: fr.title ?? c.title,
    hook: fr.hook ?? c.hook,
    tldr: fr.tldr ?? c.tldr,
    definition: fr.definition || c.definition,
    keyPoints: fr.keyPoints || c.keyPoints,
    formula,
    example,
    deepDive: fr.deepDive || c.deepDive,
    glossary: fr.glossary || c.glossary,
  };
};

export const localizeVocab = (v, lang) => {
  if (lang !== 'fr') return v;
  const fr = vocabFR[v.id];
  if (!fr) return v;
  return {
    ...v,
    term: fr.term ?? v.term,
    simple: fr.simple ?? v.simple,
    example: fr.example ?? v.example,
    remember: fr.remember ?? v.remember,
  };
};

export const localizeGlossary = (g, lang) => {
  if (lang !== 'fr') return g;
  const fr = glossaryFR[g.term];
  if (!fr) return g;
  return { ...g, term: fr.term || g.term, def: fr.def || g.def };
};

// Localize an array of concepts (used by lists/grids).
export const localizeConcepts = (arr, lang) => arr.map((c) => localizeConcept(c, lang));
export const localizeVocabs = (arr, lang) => arr.map((v) => localizeVocab(v, lang));