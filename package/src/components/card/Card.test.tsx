import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { MemoryRouter } from "react-router-dom";

test('renders Card correctly', () => {
  render(<MemoryRouter><Card title='test' imageUrl='test' /></MemoryRouter>);
  const text = screen.getByText(/test/i);
  expect(text).toBeInTheDocument();
});
