import React from "react";
import "./../style/_country.scss";
import spain from "./../image/country_img/spain.jpg";
import australia from "./../image/country_img/australia.jpg";
import thailand from "./../image/country_img/thailand.jpg";
import newzealand from "./../image/country_img/newzealand.jpg";
import france from "./../image/country_img/france.jpg";
import canada from "./../image/country_img/canada.jpg";

export default function Country() {
  return (
    <>
      <section className="section_country">
        <h1 className="country--title">Top best Country to visit</h1>
        <div className="country--wrapper">
          <button>
            <h1>spain</h1>
            <img src={spain} alt="Spain" />
          </button>

          <button className="tall">
            <h1>australia</h1>
            <img src={australia} alt="Australia" />
          </button>

          <button className="tall">
            <h1>thailand</h1>
            <img src={thailand} alt="Thailand" />
          </button>

          <button>
            <h1>newzealand</h1>
            <img src={newzealand} alt="New Zealand" />
          </button>

          <button>
            <h1>france</h1>
            <img src={france} alt="France" />
          </button>

          <button>
            <h1>canada</h1>
            <img src={canada} alt="Canada" />
          </button>
        </div>
      </section>
    </>
  );
}
