import React from 'react';
import Green from './Green';
import './../style/_green.scss';
import './../style/_footer.scss';

export default function Footer () {
  return (
    <>
      <Green />

      <footer>
        <div className="footer--logo">
          <h1 className="logo footer_logo">vibes</h1>
          <div className="footer--icon">
            <a href="#"><img src="./../image/icon/facebook--icon.jpg" /></a>
            <a href="#"><img src="./../image/icon/instagram--icon.jpg" /></a>
          </div>
        </div>
        
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
        </ul>

        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Advertise With Us</a></li>
          <li><a href="#">Contribute</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>

        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">Follow Us</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </footer>
    </>
  );
}