import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component without crashing', () => {
  render(<App />);
});

test('renders Login title on screen', () => {
  render(<App />);
  const loginTitle = screen.getByText(/login/i);
  expect(loginTitle).toBeInTheDocument();
});

