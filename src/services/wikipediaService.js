// Service to fetch finance-related content from Wikipedia API
const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const WIKIPEDIA_SEARCH_URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';

/**
 * Fetch a summary of a finance term from Wikipedia
 * @param {string} term - The finance term to search for
 * @returns {Promise<Object>} - The Wikipedia page summary
 */
export const fetchFinanceTerm = async (term) => {
  try {
    const response = await fetch(`${WIKIPEDIA_API_URL}${encodeURIComponent(term)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch term: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Wikipedia term:', error);
    throw error;
  }
};

/**
 * Search for finance terms on Wikipedia
 * @param {string} query - The search query
 * @returns {Promise<Array>} - Array of search results
 */
export const searchFinanceTerms = async (query) => {
  try {
    const response = await fetch(`${WIKIPEDIA_SEARCH_URL}${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error(`Failed to search terms: ${response.status}`);
    }
    const data = await response.json();
    // data[1] contains the titles, data[3] contains the URLs
    return data[1].map((title, index) => ({
      title,
      url: data[3][index]
    }));
  } catch (error) {
    console.error('Error searching Wikipedia terms:', error);
    throw error;
  }
};

/**
 * Get popular finance terms for quick learning
 * @returns {Array} - Array of popular finance terms
 */
export const getPopularFinanceTerms = () => {
  return [
    'Compound interest',
    'Inflation',
    'Stock market',
    'Bond',
    'Mutual fund',
    'Portfolio',
    'Diversification',
    'Risk management',
    'Credit score',
    'Insurance',
    'Budget',
    'Savings account',
    'Investment',
    'Dividend',
    'Capital gains',
    'Liquidity',
    'Leverage',
    'Volatility',
    'Bear market',
    'Bull market'
  ];
};

/**
 * Get finance categories with descriptions
 * @returns {Array} - Array of finance categories
 */
export const getFinanceCategories = () => {
  return [
    {
      id: 'banking',
      name: 'Banking',
      icon: '🏦',
      description: 'Learn about banks, loans, and financial institutions',
      terms: ['Central bank', 'Commercial bank', 'Credit union', 'Interest rate', 'Fractional reserve banking']
    },
    {
      id: 'investment',
      name: 'Investment',
      icon: '📈',
      description: 'Understand how to grow your money through investments',
      terms: ['Stock', 'Bond', 'Mutual fund', 'Portfolio', 'Diversification']
    },
    {
      id: 'markets',
      name: 'Financial Markets',
      icon: '📊',
      description: 'Explore different financial markets and how they work',
      terms: ['Stock exchange', 'Bond market', 'Foreign exchange market', 'Commodities market']
    },
    {
      id: 'corporate',
      name: 'Corporate Finance',
      icon: '🏢',
      description: 'Learn about business finance and corporate decisions',
      terms: ['Capital structure', 'Working capital', 'Cash flow', 'Leverage']
    },
    {
      id: 'personal',
      name: 'Personal Finance',
      icon: '👤',
      description: 'Manage your personal money and financial planning',
      terms: ['Budget', 'Savings', 'Credit score', 'Retirement planning', 'Insurance']
    },
    {
      id: 'international',
      name: 'International Finance',
      icon: '🌍',
      description: 'Understand global finance and currency exchange',
      terms: ['Foreign exchange rate', 'Balance of payments', 'International trade']
    }
  ];
};