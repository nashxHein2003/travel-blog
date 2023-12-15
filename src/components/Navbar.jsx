import React from 'react';

export default function Navbar () {
  return (
    <>
      <nav>
        <div className="nav--logo">
          <h1 className="logo">vibes</h1>
        </div>
        
        <div className="nav--items">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Spots</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}