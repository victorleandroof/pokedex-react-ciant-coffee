import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios', () => ({
  create: jest.fn(() => {}),
}));

test('renders Pokedex title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Pokedex/i);
  expect(titleElement).toBeInTheDocument();
});
