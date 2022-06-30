import React from 'react';
import './sidebar.scss';

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="./icons/symbol-defs.svg#icon-home"></use>
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="./icons/symbol-defs.svg#icon-aircraft-take-off"></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="./icons/symbol-defs.svg#icon-key"></use>
            </svg>
            <span>Car Rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="./icons/symbol-defs.svg#icon-map"></use>
            </svg>
            <span>Tour</span>
          </a>
        </li>
      </ul>

      <div className="legal">&copy; 2017 by Trillio. All rights reserved.</div>
    </nav>
  );
}
