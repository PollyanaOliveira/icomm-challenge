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
      <section className="favorite__icon">
        <p data-testid="tag_products" className={tagsProducts(tag)}>{tag}</p>
        <button
          data-testid="favorite_button"
          className="favorite_button"
          type="button"
          onClick={() => favoriteProduct(id, product)}
        >
          {(productExist) ? <FaHeart /> : <FaRegHeart />}
        </button>
      </section>
    );
  };

  const renderTitleAndImage = (title, image) => (
    <section className="title__products">
      <img src={image} alt="produto" className="image__product" data-testid="image_product" />
      <h3 data-testid="title_product" className="title__product">{title}</h3>
    </section>
  );

  const renderPriceAndInstalments = (price, instalments) => (
    <section className="info__products">
      <section data-testid="price_product" className="price__product">
        {`R$ ${price.toLocaleString('pt-br', { digits: 2 })}`}
      </section>
      <p data-testid="instalments_product" className="instalments__product">{instalments}</p>
    </section>
  );

  const buyButton = (id, product) => (
    <section className="product__button">
      <button
        data-testid="buy_button"
        className="buy__button"
        type="button"
        onClick={() => addCart(id, product)}
      >
        COMPRAR
      </button>
    </section>
  );

  const renderCard = () => (
    <section>
      <section data-testid="all_products">
        <Styled.Carousel>
          <Carousel breakPoints={breakPoints}>
            {products.map((product) => {
              const {
                id, tag, title, image, price, instalments,
              } = product;
              return (
                <section className="render__products">
                  {renderTagAndFavorite(id, tag, product)}
                  {renderTitleAndImage(title, image)}
                  {renderPriceAndInstalments(price, instalments)}
                  {buyButton(id, product)}
                </section>
              );
            })}
          </Carousel>
        </Styled.Carousel>
      </section>
    </section>
  );

  return (
    renderCard()
  );
}
