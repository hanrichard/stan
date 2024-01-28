/* istanbul ignore file */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './features/Home';
import { Category } from './features/CategoryPage';
import { Layout } from './components/layout/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:cat" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
