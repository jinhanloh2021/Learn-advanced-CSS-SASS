import React from 'react';
import './headerNav.scss';
import NavIcon from './headerNavIcon/NavIcon';

export default function HeaderNav(): JSX.Element {
  return (
    <>
      <nav className="user-nav">
        <NavIcon link="./icons/symbol-defs.svg#icon-bookmark" notification={7} />
        <NavIcon link="./icons/symbol-defs.svg#icon-chat" notification={12} />

        {/*for user profile*/}
        <div className="user-nav__user">
          <img src="img/user.jpg" alt="user" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Jonas</span>
        </div>
      </nav>
    </>
  );
}
