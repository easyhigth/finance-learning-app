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

test('renders the learn page with progress at 0%', async () => {
  render(
    <MemoryRouter initialEntries={['/learn']}>
      <App />
    </MemoryRouter>
  );
  expect(await screen.findByText('0%')).toBeInTheDocument();
});

test('renders a 404 page for an unknown route', async () => {
  render(
    <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
      <App />
    </MemoryRouter>
  );
  expect(await screen.findByText(/404|not found/i)).toBeInTheDocument();
});
