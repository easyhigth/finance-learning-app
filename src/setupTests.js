import '@testing-library/jest-dom';

// jsdom doesn't implement scrollTo; FeedPage/ConceptPage call it on mount.
window.HTMLElement.prototype.scrollTo = () => {};
