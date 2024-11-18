import React from "react";

import location_icon from "./../image/icon/location-icon.png";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card--img">
          <img src={props.img} alt={props.img} />
        </div>
        <div className="card--text">
          <div className="card--location">
            <a href={props.mapURL}>
              <img src={location_icon} alt="Location Icon" />
              {props.location}
            </a>
          </div>
          <h1>{props.place}</h1>
        </div>
      </div>
    </>
  );
}
