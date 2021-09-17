import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';

import FeaturedProducts from '../common/components/Products/FeaturedProducts';

afterEach(cleanup);

describe('Testa todo o componente FeaturedProducts', () => {
  it('Verifica se as tags são renderizadas nos produtos', () => {
    const { getAllByTestId } = renderWithRouter((<FeaturedProducts />));
    const tag = getAllByTestId('tag_products');
    expect(tag).toHaveLength(16);
  });

  it('Verifica se as imagens e título são renderizados nos produtos', () => {
    const { getAllByTestId } = renderWithRouter((<FeaturedProducts />));
    const img = getAllByTestId('image_product');
    const title = getAllByTestId('title_product');
    expect(img).toHaveLength(16);
    expect(title).toHaveLength(16);
  });

  it('Verifica se os preços e parcelas são renderizados nos produtos', () => {
    const { getAllByTestId } = renderWithRouter((<FeaturedProducts />));
    const price = getAllByTestId('price_product');
    const instalments = getAllByTestId('instalments_product');
    expect(price).toHaveLength(16);
    expect(instalments).toHaveLength(16);
  });

  it('Verifica se os botões são renderizados nos produtos', () => {
    const { getAllByTestId } = renderWithRouter((<FeaturedProducts />));
    const btn = getAllByTestId('buy_button');
    expect(btn).toHaveLength(16);
  });
});
