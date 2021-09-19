import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import Context from './Context';

import { setLocalStorage, getStorage } from '../helpers';

import clothes from '../data';

export default function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([...clothes]);
  const [itemsFavorite, setItemsFavorite] = useState([]);

  const LSCart = 'LS_Cart';
  const LSFavorite = 'LS_Favorite';

  const addCart = (id, product) => {
    const updateCart = [...cart];
    const productItem = { ...product };
    const productExist = updateCart.find((item) => item.id === id);

    if (productExist) {
      const findIndex = updateCart.indexOf(productExist);
      updateCart[findIndex].amount += 1;

      setLocalStorage(LSCart, updateCart);
      setCart(updateCart);
    } else {
      productItem.amount += 1;
      const updatedCart = [
        ...cart,
        productItem,
      ];
      setLocalStorage(LSCart, updatedCart);
      setCart(updatedCart);
    }
  };

  const remove = (id, data) => {
    const update = data.filter((product) => product.id !== id);
    return update;
  };

  const favoriteProduct = (id, product) => {
    const favorited = [...itemsFavorite];
    const favoriteItem = { ...product };
    const FavoriteExist = favorited.find((item) => item.id === id);

    if (FavoriteExist) {
      const updatedFavorite = remove(id, favorited);
      setLocalStorage(LSFavorite, updatedFavorite);
      setItemsFavorite(updatedFavorite);
    } else {
      const updatedFavorite = [
        ...itemsFavorite,
        favoriteItem,
      ];
      setLocalStorage(LSFavorite, updatedFavorite);
      setItemsFavorite(updatedFavorite);
    }
  };

  const clearFavorite = () => {
    setItemsFavorite([]);
  };

  const clearCart = () => {
    setCart([]);
    setLocalStorage(LSCart, []);
  };

  const context = {
    cart,
    products,
    itemsFavorite,
    setProducts,
    addCart,
    favoriteProduct,
    clearFavorite,
    clearCart,
  };

  useEffect(() => { setCart(getStorage(LSCart)); }, []);
  useEffect(() => { setItemsFavorite(getStorage(LSFavorite)); }, []);

  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};
