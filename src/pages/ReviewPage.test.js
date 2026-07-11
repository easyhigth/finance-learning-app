import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

beforeEach(() => {
  window.localStorage.clear();
});

test('shows the empty state when nothing is marked as learned', async () => {
  render(
    <MemoryRouter initialEntries={['/review']}>
      <App />
    </MemoryRouter>
  );
  expect(await screen.findByText(/nothing to review yet/i)).toBeInTheDocument();
});
