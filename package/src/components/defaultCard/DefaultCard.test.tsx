import React from 'react';
import { render, screen } from '@testing-library/react';
import { DefaultCard } from './DefaultCard';
import { MemoryRouter } from "react-router-dom";

test('renders DefaultCard correctly', () => {
  render(<MemoryRouter><DefaultCard title='test' url='test' /></MemoryRouter>);
  const text = screen.getByText(/popular test/i);
  expect(text).toBeInTheDocument();
});
