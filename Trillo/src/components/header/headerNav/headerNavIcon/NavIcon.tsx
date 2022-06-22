import React from 'react';
import './navIcon.scss';

type Props = { link: string; notification: number };

export default function NavIcon({ link, notification }: Props) {
  return (
    <div className="nav-icon-box">
      <svg className="nav-icon">
        <use xlinkHref={link}></use>
      </svg>
      <span className="nav-notification">{notification}</span>
    </div>
  );
}

/* <div className="user-nav__icon-chat">
  <svg className="user-nav__icon">
    <use xlinkHref="./icons/symbol-defs.svg#icon-chat"></use>
  </svg>
  <span className="user-nav__notification">13</span>
</div>; */
