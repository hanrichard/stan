import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { MemoryRouter } from "react-router-dom";

test('renders Header correctly', () => {
  render(<MemoryRouter><Header /></MemoryRouter>);
  const logoText = screen.getByText(/DEMO Streaming/i);
  expect(logoText).toBeInTheDocument();
  const loginText = screen.getByText(/log in/i);
  expect(loginText).toBeInTheDocument();
  const button = screen.getByText(/Start your free trail/i);
  expect(button).toBeInTheDocument();
});
