import React, { useContext } from 'react';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

import Context from '../../store/Context';

export default function NavHeader() {
  const {
    cart,
    itemsFavorite,
    setCart,
    clearFavorite,
    setQuantity,
  } = useContext(Context);

  const productsCart = setQuantity(false, cart);

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
          onClick={() => setCart()}
        >
          <div>
            <FiShoppingCart />
            {(productsCart !== 0) && (
            <div>
              <div>{productsCart === 1 ? `${productsCart} item` : `${productsCart} itens`}</div>
            </div>
            )}
          </div>
        </li>
        <div />
      </ul>
    </section>
  );
}
