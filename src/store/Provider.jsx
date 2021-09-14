import React, { useState } from 'react';
import { node } from 'prop-types';
import Context from './Context';

import { setLocalStorage } from '../helpers/localStorage';

export default function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [itemsFavorite, setItemsFavorite] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const addCart = (product, items) => {
    const updateCart = [...cart]; // atualizar o array original
    const productExist = updateCart.find((item) => item.id === product);
    const totalAmount = productExist ? productExist.amount : 0;
    // totalAmount: quantidade de produtos no carrinho
    const amount = totalAmount + 1;
    if (productExist) {
      totalAmount.amount = amount; // atualiza o updatecart
    } else {
      const updateProducts = {
        ...items,
        amount: 1,
      };
      updateCart.push(updateProducts);
    }
    setLocalStorage(updateCart);
  };

  const removeCart = (product) => {
    const updateCart = [...cart];
    const productExist = updateCart.find((item) => item.id === product);
    const newCart = updateCart.filter((item) => item.id !== product);
    if (productExist) return setLocalStorage(newCart);
    return productExist;
  };

  const favoriteCart = (id) => {
    const favoriteProducts = [...products];
    const favoriteExist = favoriteProducts.find((item) => item.id === id);
    const updateFavorite = favoriteProducts.indexOf(favoriteExist);
    favoriteProducts[updateFavorite] = !favoriteProducts[updateFavorite];
    setLocalStorage((setItemsFavorite(favoriteProducts)));
    return favoriteProducts;
  };

  const handleClear = () => {
    const items = [...products];
    items.forEach((item) => items[item]);
    setProducts((setItemsFavorite(items.favorite = false)));
  };

  const context = {
    cart,
    products,
    itemsFavorite,
    quantity,
    setCart,
    setProducts,
    setItemsFavorite,
    setQuantity,
    addCart,
    removeCart,
    favoriteCart,
    handleClear,
  };

  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};
