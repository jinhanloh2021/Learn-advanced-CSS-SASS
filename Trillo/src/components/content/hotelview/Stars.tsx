import React from 'react';
import './stars.scss';

export default function Stars() {
  return (
    <div className="overview__stars">
      <svg className="overview__stars-icon">
        <use xlinkHref="./icons/symbol-defs.svg#icon-star"></use>
      </svg>
      <svg className="overview__stars-icon">
        <use xlinkHref="./icons/symbol-defs.svg#icon-star"></use>
      </svg>
      <svg className="overview__stars-icon">
        <use xlinkHref="./icons/symbol-defs.svg#icon-star"></use>
      </svg>
      <svg className="overview__stars-icon">
        <use xlinkHref="./icons/symbol-defs.svg#icon-star"></use>
      </svg>
      <svg className="overview__stars-icon">
        <use xlinkHref="./icons/symbol-defs.svg#icon-star"></use>
      </svg>
    </div>
  );
}
