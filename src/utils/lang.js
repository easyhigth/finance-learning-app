import { createContext, useContext } from 'react';

const KEY = 'financelearn:lang';

export const LANGS = ['en', 'fr'];

export const getStoredLang = () => {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'fr' ? 'fr' : 'en';
  } catch {
    return 'en';
  }
};

export const LangContext = createContext({ lang: 'en', setLang: () => {}, t: (k) => k });

// UI string dictionary. Keys map to { en, fr }. `t(key)` returns the current lang.
export const STRINGS = {
  // Nav
  nav_discover: { en: 'Discover', fr: 'Découvrir' },
  nav_categories: { en: 'Categories', fr: 'Catégories' },
  nav_search: { en: 'Search', fr: 'Recherche' },
  nav_favorites: { en: 'Favorites', fr: 'Favoris' },
  nav_progress: { en: 'Progress', fr: 'Progression' },
  nav_words: { en: 'Words', fr: 'Mots' },
  // Header
  search_aria: { en: 'Search', fr: 'Rechercher' },
  favorites_aria: { en: 'Your favorites', fr: 'Vos favoris' },
  // Favorites page
  fav_eyebrow: { en: '★ Favorites', fr: '★ Favoris' },
  fav_title: { en: 'Your favorites', fr: 'Vos favoris' },
  fav_sub: {
    en: 'Everything you starred for later — concepts and vocabulary in one place. Tap the star on any item to add or remove it.',
    fr: 'Tout ce que vous avez mis en étoile pour plus tard — concepts et vocabulaire au même endroit. Touchez l’étoile d’un élément pour l’ajouter ou le retirer.',
  },
  fav_empty_title: { en: 'No favorites yet', fr: 'Aucun favori pour l’instant' },
  fav_empty_sub: {
    en: 'Star the concepts and terms you want to keep close — they will appear here.',
    fr: 'Étoilez les concepts et termes à garder sous la main — ils apparaîtront ici.',
  },
  fav_empty_discover: { en: 'Discover concepts', fr: 'Découvrir les concepts' },
  fav_empty_search: { en: 'Search a term', fr: 'Rechercher un terme' },
  fav_concepts: { en: 'Concepts', fr: 'Concepts' },
  fav_vocabulary: { en: 'Vocabulary', fr: 'Vocabulaire' },
  fav_terms: { en: 'Terms', fr: 'Termes' },
  // Search page
  search_eyebrow: { en: 'Search', fr: 'Recherche' },
  search_title: { en: 'Find a concept or term', fr: 'Trouver un concept ou un terme' },
  search_sub: {
    en: 'Search the full library by name, idea, or vocabulary — in English or French. Concepts open a complete single-page explainer; vocabulary terms give you a quick fiche with a definition, a link to the deep concept when one exists, and a Wikipedia fallback for everything else.',
    fr: 'Cherchez dans toute la bibliothèque par nom, idée ou vocabulaire — en anglais ou en français. Les concepts ouvrent un explainer complet ; les termes de vocabulaire donnent une fiche rapide avec une définition, un lien vers le concept approfondi quand il existe, et un repli Wikipedia pour le reste.',
  },
  search_placeholder: { en: 'e.g. compound interest, fond, obligation, swap, hedge…', fr: 'ex. intérêts composés, fond, obligation, swap, couverture…' },
  search_btn: { en: 'Search', fr: 'Rechercher' },
  results_for: { en: 'Results for', fr: 'Résultats pour' },
  found: { en: 'found', fr: 'trouvés' },
  concept_s: { en: 'concept', fr: 'concept' },
  term_s: { en: 'term', fr: 'terme' },
  concepts_sub: { en: 'Concepts', fr: 'Concepts' },
  vocab_sub: { en: 'Vocabulary', fr: 'Vocabulaire' },
  no_match: { en: 'No match for', fr: 'Aucun résultat pour' },
  no_match_sub: {
    en: 'The library is curated, so it won’t have everything — but Wikipedia will.',
    fr: 'La bibliothèque est sélectionnée, elle n’a pas tout — mais Wikipedia si.',
  },
  search_wiki: { en: 'Search on Wikipedia', fr: 'Rechercher sur Wikipedia' },
  open_full: { en: 'Open full concept', fr: 'Ouvrir le concept complet' },
  read_wiki: { en: 'Read on Wikipedia', fr: 'Lire sur Wikipedia' },
  quick_picks: { en: 'Quick picks', fr: 'Sélections rapides' },
  quick_picks_sub: { en: 'Tap a concept to jump straight in.', fr: 'Touchez un concept pour y accéder.' },
  search_tips: { en: 'Search tips', fr: 'Astuces de recherche' },
  tip_lang: { en: 'Type in French or English — “fond” finds the Fund fiche, “obligation” finds Bond.', fr: 'Écrivez en français ou en anglais — « fond » trouve la fiche Fund, « obligation » trouve Bond.' },
  tip_idea: { en: 'Search by idea, not just the exact title — “risk” finds “Risk vs. Return”.', fr: 'Cherchez par idée, pas seulement par titre — « risque » trouve « Risk vs. Return ».' },
  tip_kinds: { en: 'Two kinds of results: full concepts and quick vocabulary fiches.', fr: 'Deux types de résultats : concepts complets et fiches rapides de vocabulaire.' },
  tip_wiki: { en: 'Terms without a deep concept link straight to Wikipedia, so nothing is ever missing.', fr: 'Les termes sans concept lié renvoient à Wikipedia, rien ne manque.' },
  // Categories page
  cat_eyebrow: { en: 'Browse', fr: 'Parcourir' },
  cat_title: { en: 'Finance Categories', fr: 'Catégories de finance' },
  cat_sub: {
    en: 'Pick a track and scroll through every concept in it — each one opens a full single-page explainer.',
    fr: 'Choisissez une filière et défilez tous ses concepts — chacun ouvre un explainer complet.',
  },
  cat_search_ph: { en: 'Search categories or concepts...', fr: 'Rechercher catégories ou concepts…' },
  cat_concepts: { en: 'concepts', fr: 'concepts' },
  cat_scroll: { en: 'Scroll this track', fr: 'Défiler cette filière' },
  cat_no_matches: { en: 'No matches', fr: 'Aucune correspondance' },
  cat_no_matches_sub: { en: 'Nothing fits "{q}" — try a broader word.', fr: 'Rien ne correspond à « {q} » — essayez un mot plus large.' },
  cat_path_title: { en: 'Not sure where to start?', fr: 'Vous ne savez pas par où commencer ?' },
  cat_path_sub: { en: 'Foundations first — the five ideas every other concept leans on.', fr: 'Commencez par les fondamentaux — les cinq idées sur lesquelles tout repose.' },
  cat_path_cta: { en: 'Start with Foundations', fr: 'Commencer par les fondamentaux' },
  // Words page
  words_eyebrow: { en: 'Vocabulary', fr: 'Vocabulaire' },
  words_title: { en: 'Words', fr: 'Mots' },
  words_sub: {
    en: 'Scroll through plain definition cards — one term at a time. Flip the language in the header anytime.',
    fr: 'Défilez des cartes de définition simples — un terme à la fois. Changez la langue dans l’en-tête à tout moment.',
  },
  words_count: { en: 'cards', fr: 'cartes' },
  words_filter: { en: 'Filter', fr: 'Filtrer' },
  words_filter_ph: { en: 'Type to filter…', fr: 'Tapez pour filtrer…' },
  words_empty: { en: 'No word matches your filter.', fr: 'Aucun mot ne correspond à votre filtre.' },
  // Concept page
  concept_in_one_line: { en: 'In one line', fr: 'En une ligne' },
  concept_what: { en: 'What it is', fr: 'Ce que c’est' },
  concept_key: { en: 'Key points', fr: 'Points clés' },
  concept_formula: { en: 'The formula & a worked example', fr: 'La formule et un exemple chiffré' },
  concept_deep: { en: 'Going deeper', fr: 'Aller plus loin' },
  concept_terms: { en: 'Terms to know', fr: 'Termes à connaître' },
  concept_mark: { en: 'Mark as learned', fr: 'Marquer comme appris' },
  concept_marked: { en: '✓ Marked as learned', fr: '✓ Marqué comme appris' },
  concept_wiki: { en: 'Read full article on Wikipedia', fr: 'Lire l’article complet sur Wikipedia' },
  concept_related: { en: 'Related concepts', fr: 'Concepts liés' },
  concept_previn: { en: 'Previous in', fr: 'Précédent dans' },
  concept_nextin: { en: 'Next in', fr: 'Suivant dans' },
  concept_missing_title: { en: 'Concept not found', fr: 'Concept introuvable' },
  concept_missing_sub: { en: 'We don’t have that one in the library yet.', fr: 'Nous n’avons pas encore celui-ci dans la bibliothèque.' },
  concept_back_home: { en: '← Back to the feed', fr: '← Retour au flux' },
  concept_feed: { en: 'Feed', fr: 'Flux' },
  // Feed
  feed_all: { en: 'All', fr: 'Tous' },
  feed_scroll_more: { en: 'Scroll for more', fr: 'Faire défiler' },
  feed_open: { en: 'Open full concept', fr: 'Ouvrir le concept' },
  feed_vocab_chip: { en: 'Vocabulary', fr: 'Vocabulaire' },
  feed_in_one_line: { en: 'In one line', fr: 'En une ligne' },
  feed_simple: { en: 'In simple terms', fr: 'En termes simples' },
  feed_example: { en: 'Example', fr: 'Exemple' },
  feed_remember: { en: 'To remember', fr: 'Pour retenir' },
  feed_end_title: { en: 'You’ve seen them all', fr: 'Vous avez tout vu' },
  feed_end_all: {
    en: 'That was the whole library — concepts and vocabulary. Keep learning by opening any item, or jump to a category.',
    fr: 'C’était toute la bibliothèque — concepts et vocabulaire. Continuez en ouvrant un élément, ou sautez à une catégorie.',
  },
  feed_end_cat: {
    en: 'That was every concept and term in {name}.',
    fr: 'C’était tous les concepts et termes de {name}.',
  },
  feed_end_keep: {
    en: 'Keep learning by opening any item, or jump to a category.',
    fr: 'Continuez en ouvrant un élément, ou sautez à une catégorie.',
  },
  feed_all_btn: { en: 'All concepts', fr: 'Tous les concepts' },
  feed_browse: { en: 'Browse categories', fr: 'Parcourir les catégories' },
  feed_fav_empty_title: { en: 'No favorites yet', fr: 'Aucun favori pour l’instant' },
  feed_fav_empty_sub: {
    en: 'Tap the star on any concept or vocabulary card to keep it here for quick review.',
    fr: 'Touchez l’étoile d’un concept ou d’une fiche pour le garder ici et le réviser.',
  },
  // Learn page (partial)
  learn_eyebrow: { en: 'Your progress', fr: 'Votre progression' },
  learn_title: { en: 'Keep learning', fr: 'Continuez à apprendre' },
};

export const useLang = () => useContext(LangContext);