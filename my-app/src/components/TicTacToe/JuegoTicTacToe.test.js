import { render, screen } from '@testing-library/react';
import JuegoTicTacToe from './JuegoTicTacToe';

test('renders learn react link', () => {
  render(<JuegoTicTacToe />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
