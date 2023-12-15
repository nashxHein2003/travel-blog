import React from 'react';
import './../style/_country.scss';

export default function Country () {
  return (
    <>
      <section className="section_country">
        <h1 className="country--title">Top best Country to visit</h1>
        <div className="country--wrapper">
          <button>
            <h1>spain</h1>
            <img src="./../image/country_img/spain.jpg" />
          </button>

          <button className="tall">
            <h1>australia</h1>
            <img src="./../image/country_img/australia.jpg" />
          </button>

          <button className="tall">
            <h1>thailand</h1>
            <img src="./../image/country_img/thailand.jpg" />
          </button>

          <button>
            <h1>newzealand</h1>
            <img src="./../image/country_img/newzealand.jpg" />
          </button>

          <button>
            <h1>france</h1>
            <img src="./../image/country_img/france.jpg" />
          </button>
          
          <button>
            <h1>canada</h1>
            <img src="./../image/country_img/canada.jpg" />
          </button>
        </div>
      </section>
    </>
  );
}