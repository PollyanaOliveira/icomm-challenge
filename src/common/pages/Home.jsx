import React from 'react';

import Header from '../components/Header';

import image5 from '../../images/image_5.png';
import image6 from '../../images/image_6.png';

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <p>
          ÍRIS
          <br />
          VERÃO
          <br />
          <img src={image5} alt="Destaque Verão" />
        </p>
      </section>
      <section>
        <p>
          LE LIS
          <br />
          BLAC
          <br />
          <img src={image6} alt="Destaque Le Lis Blanc" />
        </p>
      </section>
      <section>
        <h2>DESTAQUES</h2>
      </section>
    </main>
  );
}
