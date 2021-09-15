import React, { useContext } from 'react';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

import Context from '../../store/Context';

export default function NavHeader() {
  const {
    cart,
    itemsFavorite,
    clearFavorite,
    clearCart,
  } = useContext(Context);

  const productsInCart = cart.length;

  const favorite = () => ((!itemsFavorite.length) ? <FaRegHeart /> : <FaHeart />);

  return (
    <section>
      <ul>
        <li
          aria-hidden
          onClick={() => clearFavorite()}
        >
          <div>
            {favorite()}
          </div>
        </li>
        <li
          aria-hidden
          onClick={() => clearCart()}
        >
          <div>
            <FiShoppingCart />
            {(productsInCart !== 0) && (
            <div>
              <div>{productsInCart === 1 ? `${productsInCart}` : `${productsInCart}`}</div>
            </div>
            )}
          </div>
        </li>
        <div />
      </ul>
    </section>
  );
}
