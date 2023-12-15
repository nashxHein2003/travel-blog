import React from 'react';
import Card from './Card';
import data from '../data/main-card-data';

export default function Main () {

  
    const card = data.map(info => {
      return (
        <Card 
          img = {info.imgURL}
          location = {info.location}
          place = {info.place}
          mapURL = {info.mapURL}
        />
      )
    })

    function buttonSeeMore() {

      const mainElement = document.querySelector('.main--explore')
    
      if (mainElement.style.height) {
        mainElement.style.height = '';
      } else {
        mainElement.style.height = '480px';
      }
     
    }

  return (
    <>
      <main>
        <div className="main--head_text">
          <h1>
            It's a big world
          </h1>
          <header>
            Explore more by yourselves!
          </header>
        </div>

        <div className="main--explore" id="mainExplore" style={{height: "480px"}}>
          <div className="card--category">
            {card}
          </div>
        </div>
        <div className="main--btn">
          <div className="main--btn_line"></div>
          <button onClick=
            {buttonSeeMore}
          >See More</button> 
        </div>
      </main>
    </>
  );
}