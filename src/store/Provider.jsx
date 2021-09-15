import React, { useState } from 'react';
import { node } from 'prop-types';
import Context from './Context';

import { setLocalStorage } from '../helpers/localStorage';

import clothes from '../data';

export default function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([...clothes]);
  const [itemsFavorite, setItemsFavorite] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const addCart = (id, product) => {
    const updateCart = [...cart];
    const productItem = { ...product };
    const productExist = updateCart.find((item) => item.id === id);
    const LSCart = 'LS_Cart';

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
    // setCart,
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
