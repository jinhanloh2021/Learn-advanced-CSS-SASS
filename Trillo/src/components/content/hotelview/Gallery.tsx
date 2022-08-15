import React from 'react';
import './gallery.scss';

export default function Gallery() {
  return (
    <div className="gallery">
      <figure className="gallery__item">
        <img src="img/hotel-1.jpg" alt="Pic of hotel 1" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src="img/hotel-2.jpg" alt="Pic of hotel 2" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src="img/hotel-3.jpg" alt="Pic of hotel 3" className="gallery__photo" />
      </figure>
    </div>
  );
}
