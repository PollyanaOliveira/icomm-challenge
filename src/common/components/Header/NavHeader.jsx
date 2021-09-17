import React, { useContext } from 'react';

import { FaHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

import Context from '../../../store/Context';

export default function NavHeader() {
  const {
    cart,
    itemsFavorite,
    clearFavorite,
    clearCart,
  } = useContext(Context);

  const productsInCart = cart.length;

  const favorite = () => ((!itemsFavorite.length) ? '' : <FaHeart />);

  return (
    <section>
      <ul className="nav__list">
        <li
          className="nav__item"
          aria-hidden
          onClick={() => clearFavorite()}
        >
          <div
            className="nav__favorites"
            data-testid="favorite-icon"
          >
            {favorite()}
          </div>
        </li>
        <li
          className="nav__item"
          aria-hidden
          onClick={() => clearCart()}
        >
          <div className="show__cart">
            <FiShoppingCart className="nav__icon" />
            <div
              className="cart__count"
              data-testid="shopping-cart-size"
            >
              {productsInCart}
            </div>
          </div>
        </li>
        <div />
      </ul>
    </section>
  );
}
