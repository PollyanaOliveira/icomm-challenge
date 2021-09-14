import React, { useContext } from 'react';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

export default function NavHeader() {
  const {
    cart,
    products,
    setCart,
    handleClear,
    setQuantity,
  } = useContext();

  const productsCart = setQuantity(false, cart);

  return (
    <section>
      <ul>
        <li
          aria-hidden
          onClick={handleClear}
        >
          <div>
            {(products.some((item) => item.favorited)) ? <FaHeart /> : <FaRegHeart /> }
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
