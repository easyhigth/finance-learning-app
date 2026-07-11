// French translations for concepts.js content, keyed by concept id, plus
// category names/blurbs keyed by category id. Only translatable fields are
// listed here — localizeConcept()/localizeCategory() in concepts.js merge
// these over the English base object. Anything missing here simply falls
// back to English, so the app degrades gracefully while translations are
// filled in incrementally.
export const categoriesFr = {
  foundations: { name: 'Fondamentaux', blurb: 'Les idées dont toute personne financièrement éclairée a besoin en premier.' },
  investing: { name: 'Investissement', blurb: "Comment l'argent fructifie quand on le met au travail." },
  markets: { name: 'Marchés', blurb: 'Comment se forment les prix et qui les échange.' },
  personal: { name: 'Finances personnelles', blurb: 'Budget, crédit, épargne — votre propre argent.' },
  corporate: { name: 'Finance d\'entreprise', blurb: 'Comment les entreprises se financent et se gèrent.' },
  banking: { name: 'Banque & Crédit', blurb: 'Intérêts, prêts, et fonctionnement des banques.' },
  economics: { name: 'Économie', blurb: 'Les grandes forces derrière les prix et la croissance.' },
  risk: { name: 'Risque & Comportement', blurb: "Comment nous gérons mal l'incertitude." },
  institutions: { name: 'Institutions financières', blurb: 'Les architectes et gardiens du système financier.' },
  derivatives: { name: 'Produits dérivés & Trading', blurb: 'Outils avancés de couverture, spéculation et découverte des prix.' },
  accounting: { name: 'Comptabilité', blurb: "Le langage des affaires — comment les entreprises enregistrent et rapportent l'argent." },
  fintech: { name: 'Crypto & Fintech', blurb: 'Monnaie numérique, registres, et la technologie qui transforme la finance.' },
};

export const conceptsFr = {};
