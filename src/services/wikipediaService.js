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
    // data[0] contains the search terms, data[1] contains the titles, data[3] contains the URLs
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
 * Get a list of finance-related categories
 * @returns {Array} - Array of finance categories
 */
export const getFinanceCategories = () => {
  return [
    'Banking',
    'Investment',
    'Financial Markets',
    'Corporate Finance',
    'Personal Finance',
    'International Finance',
    'Public Finance',
    'Behavioral Finance',
    'Financial Instruments',
    'Risk Management',
    'Financial Regulations',
    'Cryptocurrency',
    'Financial Analysis'
  ];
};

/**
 * Get sample finance terms for each category
 * @returns {Object} - Object with categories as keys and arrays of terms as values
 */
export const getSampleFinanceTerms = () => {
  return {
    'Banking': ['Central bank', 'Commercial bank', 'Credit union', 'Interest rate', 'Fractional reserve banking'],
    'Investment': ['Stock', 'Bond', 'Mutual fund', 'Portfolio', 'Diversification'],
    'Financial Markets': ['Stock exchange', 'Bond market', 'Foreign exchange market', 'Commodities market'],
    'Corporate Finance': ['Capital structure', 'Working capital', 'Cash flow', 'Leverage'],
    'Personal Finance': ['Budget', 'Savings', 'Credit score', 'Retirement planning', 'Insurance'],
    'International Finance': ['Foreign exchange rate', 'Balance of payments', 'International trade'],
    'Public Finance': ['Government budget', 'Taxation', 'Public debt', 'Fiscal policy'],
    'Behavioral Finance': ['Cognitive bias', 'Anchoring', 'Loss aversion', 'Overconfidence'],
    'Financial Instruments': ['Derivative', 'Option', 'Future', 'Swap'],
    'Risk Management': ['Value at risk', 'Hedging', 'Insurance', 'Diversification'],
    'Financial Regulations': ['SEC', 'Basel III', 'Dodd-Frank Act', 'Financial Conduct Authority'],
    'Cryptocurrency': ['Bitcoin', 'Blockchain', 'Ethereum', 'Smart contract'],
    'Financial Analysis': ['Ratio analysis', 'Valuation', 'Financial modeling', 'Technical analysis']
  };
};