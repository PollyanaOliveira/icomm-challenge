import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

import renderWithRouter from './helpers/renderWithRouter';

import Home from '../common/pages/Home/Home';
import Header from '../common/components/Header/Header';
import FeaturedProducts from '../common/components/Products/FeaturedProducts';

afterEach(cleanup);

describe('Verifica elementos do Home', () => {
  it('Verifica se há dois título "ÍRIS VERÃO 2022" e "LE LIS BLAC"', () => {
    const { getByText } = renderWithRouter(
      <Home>
        <Header />
        <FeaturedProducts />
      </Home>,
    );
    const title1 = getByText(/ÍRIS VERÃO 2022/i);
    const title2 = getByText(/LE LIS BLAC/i);
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
  });
});
