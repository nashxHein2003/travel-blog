import React from 'react';

export default function Card (props) {
  return (
    <>
      <div className="card">
        <div className="card--img">
          <img src= {props.img} />
        </div>
        <div className="card--text">
          <div className="card--location">
            <a href={props.mapURL}><img src="./../image/icon/location-icon.png"  />{props.location}</a>
          </div>
          <h1>{props.place}</h1>
        </div>
      </div>
    </>
  );
}