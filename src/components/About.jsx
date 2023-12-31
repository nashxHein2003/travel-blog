import React from 'react';

export default function About () {
  return (
    <>
      <section className="section_about">
        <div className="about">
          <div className="about--text">
            <h1>Find Your Pleasure <br /> by <span>exploring</span> the world</h1>
            <p>
              Exploring the world through travel is an exhilarating journey of discovery. It's about embracing diverse cultures, savoring unique flavors, and creating lasting memories. Each adventure unfolds a new chapter, turning the ordinary into extraordinary experiences that linger in the heart forever.</p>

              <div className="about--text_line"></div>
          </div>
          <div className="about--img">
            
            <img src="./../image/about/about--img1.jpg" class="about--img1" />
            <img src="./../image/about/about--img2.jpg" class="about--img2" />
          </div>
        </div>
        
      </section>
    </>
  );
}