import { renderHook, act } from '@testing-library/react';
import { useTheme, getStoredTheme } from './theme';

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});

test('toggle sets data-theme on <html> and persists the choice', () => {
  const { result } = renderHook(() => useTheme());

  act(() => result.current.toggle());

  const chosen = document.documentElement.getAttribute('data-theme');
  expect(['light', 'dark']).toContain(chosen);
  expect(getStoredTheme()).toBe(chosen);
});

test('toggling twice returns to the opposite of the first toggle', () => {
  const { result } = renderHook(() => useTheme());

  act(() => result.current.toggle());
  const first = document.documentElement.getAttribute('data-theme');

  act(() => result.current.toggle());
  const second = document.documentElement.getAttribute('data-theme');

  expect(second).not.toBe(first);
});
