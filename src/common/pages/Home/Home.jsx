import React from 'react';

import Header from '../../components/Header/Header';
import FeaturedProducts from '../../components/Products/FeaturedProducts';

import './home.css';

import image5 from '../../../images/image_5.png';
import image6 from '../../../images/image_6.png';

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <section className="featured__container">
          <section className="featured__images">
            <section className="left__content">
              <section className="title__images">
                <p>ÍRIS</p>
                <p>VERÃO</p>
                <p>2022</p>
              </section>
              <img src={image5} alt="Destaque Verão" />
            </section>
            <section className="right__content">
              <section className="title__images">
                <p>LE LIS</p>
                <p>BLAC</p>
              </section>
              <img src={image6} alt="Destaque Le Lis Blanc" />
            </section>
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
