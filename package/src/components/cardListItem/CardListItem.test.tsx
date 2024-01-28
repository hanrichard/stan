import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardListItem } from './CardListItem';

test('renders CardListItem correctly', () => {
  render(<CardListItem>test</CardListItem>);
  const text = screen.getByText(/test/i);
  expect(text).toBeInTheDocument();
});
