import { render, screen } from './node_modules/@testing-library/react';
import PlemApp from './PlemApp';

test('renders learn react link', () => {
  render(<PlemApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
