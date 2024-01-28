import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { MemoryRouter } from "react-router-dom";

test('renders Footer correctly', () => {
  render(<MemoryRouter><Footer /></MemoryRouter>);
  const homeText = screen.getByText(/Home/i);
  expect(homeText).toBeInTheDocument();

  const copyrightText = screen.getByText(/Copyright @2016 DEMO Streaming. All Rights Reserved./i);
  expect(copyrightText).toBeInTheDocument();

  const facebookText = screen.getByText(/facebook/i);
  expect(facebookText).toBeInTheDocument();
});
