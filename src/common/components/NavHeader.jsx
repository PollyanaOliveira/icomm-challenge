import React, { useContext } from 'react';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

import Context from '../../store/Context';

export default function NavHeader() {
  const {
    cart,
    products,
    setCart,
    handleClear,
    setQuantity,
  } = useContext(Context);

  const productsCart = setQuantity(false, cart);

  return (
    <section>
      <ul>
        <li
          aria-hidden
          onClick={handleClear}
        >
          <div>
            {(products.some((item) => item.favorite)) ? <FaHeart /> : <FaRegHeart /> }
          </div>
        </li>
        <li
          aria-hidden
          onClick={() => setCart(cart([]))}
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
