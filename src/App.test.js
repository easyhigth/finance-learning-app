import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
});

test('renders the feed at / without crashing', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('banner')).toBeInTheDocument();
});

test('renders the learn page with progress at 0%', () => {
  render(
    <MemoryRouter initialEntries={['/learn']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('0%')).toBeInTheDocument();
});

test('renders a 404 page for an unknown route', () => {
  render(
    <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/404|not found/i)).toBeInTheDocument();
});
