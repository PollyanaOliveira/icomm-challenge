import React from 'react';

import Header from '../../components/Header/Header';
// import CarouselProducts from '../../components/Carousel/CarouselProducts';
import FeaturedProducts from '../../components/Products/FeaturedProducts';

import './home.css';

import image5 from '../../../images/image_5.png';
import image6 from '../../../images/image_6.png';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="home__main">
        <section className="featured__images">
          <section>
            <p className="title__images">
              ÍRIS
              <br />
              VERÃO
              <br />
              <img src={image5} alt="Destaque Verão" />
            </p>
          </section>
          <section>
            <p className="title__images">
              LE LIS
              <br />
              BLAC
              <br />
              <img src={image6} alt="Destaque Le Lis Blanc" />
            </p>
          </section>
        </section>
        <section className="featured__products">
          <h2 className="featured__title">DESTAQUES</h2>
          <FeaturedProducts />
        </section>
      </section>
    </main>
  );
}
