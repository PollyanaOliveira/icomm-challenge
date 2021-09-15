import React, { useContext } from 'react';

import { FaHeart, FaRegHeart } from 'react-icons/fa';

import Context from '../../store/Context';

export default function FeaturedProducts() {
  const {
    products, setProducts, itemsFavorite, setItemsFavorite, addCart,
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

  const renderTagAndFavorite = (id, tag, favorite) => (
    <div>
      <p className={tagsProducts()}>{tag}</p>
      <button
        type="button"
        onClick={() => setProducts(setItemsFavorite(itemsFavorite(products, id)))}
      >
        {(favorite) ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );

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
            id, tag, favorite, title, image, price, instalments,
          } = product;
          return (
            <div>
              {renderTagAndFavorite(id, tag, favorite)}
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
