import React from 'react';
import './sidebar.scss';

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref='img/sprite.svg#icon-home'></use>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
