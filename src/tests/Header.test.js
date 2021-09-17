import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './helpers/renderWithRouter';

import Header from '../common/components/Header/Header';

afterEach(cleanup);

describe('Testa todo o componente Header', () => {
  it('Verifica se o nome da logo está renderizada na tela', () => {
    const { getByText } = renderWithRouter(<Header />);
    const title = getByText(/MCX/i);
    expect(title).toBeInTheDocument();
  });

  it('Verifica se a imagem da logo está sendo renderizada', () => {
    const { getByAltText, getByRole } = renderWithRouter(<Header />);
    const logoImage = getByRole('img', { name: /logo/i });
    const altImage = getByAltText(/logo/i);
    expect(altImage).toBeInTheDocument();
    expect(logoImage);
  });

  it('Verifica se o há um botão cujo o data-testid seja "button_logo"', () => {
    const { getByTestId } = renderWithRouter(<Header />);
    const buttonId = getByTestId('button_logo');
    expect(buttonId).toBeInTheDocument();
  });

  it('Mostra a quantidade de produtos dentro do carrinho de compras', () => {
    const { getAllByTestId } = renderWithRouter(<Header />);
    userEvent.click(getAllByTestId('shopping-cart-size')[0]);
  });

  it('Verifica se o ícone dos itens favoritos possui um data-testid "favorite-icon"', () => {
    const { getByTestId } = renderWithRouter(<Header />);
    const favoriteId = getByTestId('favorite-icon');
    expect(favoriteId).toBeInTheDocument();
  });
});
