import React from 'react';
import './hotelview.scss';
import Stars from './Stars';
import Gallery from './Gallery';

// type Props = {};

export default function Hotelview() {
  return (
    <main className="hotel-view">
      <Gallery />

      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>
        <Stars />

        <div className="overview__location">
          <svg className="overview__location-icon">
            <use xlinkHref="./icons/symbol-defs.svg#icon-location-pin"></use>
          </svg>
          <button className="overview__location-btn">Albufeira, Portugal</button>
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>
    </main>
  );
}
