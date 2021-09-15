import React, { useContext } from 'react';

import { FaHeart, FaRegHeart } from 'react-icons/fa';

import Context from '../../store/Context';

export default function FeaturedProducts() {
  const {
    products, favoriteProduct, addCart, itemsFavorite,
  } = useContext(Context);

  const tagsProducts = (tag) => {
    const summer = 'VERÃO 2022';
    const launch = 'LANÇAMENTO';
    const discount = '20% OFF';
    const classSummer = 'tag__summer';
    const classLaunch = 'tag__launch';
    const classDiscount = 'tag__discount';

    if (tag === summer) return classSummer;
    if (tag === launch) return classLaunch;
    if (tag === discount) return classDiscount;
    return '';
  };

  const renderTagAndFavorite = (id, tag, product) => {
    const productExist = itemsFavorite.find((item) => item.id === id);
    return (
      <div>
        <p className={tagsProducts()}>{tag}</p>
        <button
          type="button"
          onClick={() => favoriteProduct(id, product)}
        >
          {(productExist) ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    );
  };

  const renderTitleAndImage = (title, image) => (
    <div>
      <img src={image} alt="produto" />
      <h3>{title}</h3>
    </div>
  );

  const renderPriceAndInstalments = (price, instalments) => (
    <div>
      <div>
        {`R$ ${price.toLocaleString('pt-br', { digits: 2 })}`}
      </div>
      <p>{instalments}</p>
    </div>
  );

  const buyButton = (id, product) => (
    <div>
      <button
        type="button"
        onClick={() => addCart(id, product)}
      >
        COMPRAR
      </button>
    </div>
  );

  const renderCard = () => (
    <section>
      <div>
        {products.map((product) => {
          const {
            id, tag, title, image, price, instalments,
          } = product;
          return (
            <div>
              {renderTagAndFavorite(id, tag, product)}
              {renderTitleAndImage(title, image)}
              {renderPriceAndInstalments(price, instalments)}
              {buyButton(id, product)}
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    renderCard()
  );
}
