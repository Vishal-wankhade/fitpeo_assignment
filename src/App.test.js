import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
'rgba(108, 1, 189, 0.93)', // Blue for new customers
'rgba(255, 0, 67, 0.89)',