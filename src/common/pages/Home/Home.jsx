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
        <section className="featured__images">
          <section>
            <h1 className="title__images">
              ÍRIS VERÃO 2022
            </h1>
            <img src={image5} alt="Destaque Verão" />
          </section>
          <section>
            <p className="title__images">
              LE LIS BLAC
            </p>
            <img src={image6} alt="Destaque Le Lis Blanc" />
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
