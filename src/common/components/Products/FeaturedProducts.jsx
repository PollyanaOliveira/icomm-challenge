import React, { useContext } from 'react';
import Carousel from 'react-elastic-carousel';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import * as Styled from './styles';

import './products.css';

import Context from '../../../store/Context';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 968, itemsToShow: 4 },
];

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
      <div className="favorite__icon">
        <p className={tagsProducts(tag)}>{tag}</p>
        <button
          className="favorite_button"
          type="button"
          onClick={() => favoriteProduct(id, product)}
        >
          {(productExist) ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    );
  };

  const renderTitleAndImage = (title, image) => (
    <div className="info__products">
      <img src={image} alt="produto" />
      <h3 className="title__product">{title}</h3>
    </div>
  );

  const renderPriceAndInstalments = (price, instalments) => (
    <div className="info__products">
      <div className="price__product">
        {`R$ ${price.toLocaleString('pt-br', { digits: 2 })}`}
      </div>
      <p className="instalments__product">{instalments}</p>
    </div>
  );

  const buyButton = (id, product) => (
    <div className="product__button">
      <button
        className="buy__button"
        type="button"
        onClick={() => addCart(id, product)}
      >
        COMPRAR
      </button>
    </div>
  );

  const renderCard = () => (
    <section>
      <div className="products__main">
        <Styled.Carousel>
          <Carousel breakPoints={breakPoints}>
            {products.map((product) => {
              const {
                id, tag, title, image, price, instalments,
              } = product;
              return (
                <div className="render__products">
                  {renderTagAndFavorite(id, tag, product)}
                  {renderTitleAndImage(title, image)}
                  {renderPriceAndInstalments(price, instalments)}
                  {buyButton(id, product)}
                </div>
              );
            })}
          </Carousel>
        </Styled.Carousel>
      </div>
    </section>
  );

  return (
    renderCard()
  );
}
