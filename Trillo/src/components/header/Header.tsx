import React from 'react';
import './header.scss';
import SearchBar from './searchBar/SearchBar';
import HeaderNav from './headerNav/HeaderNav';

// type Props = {};

export default function Header() {
  return (
    <header className="header">
      <img src="./img/logo.png" alt="trillio logo" className="logo" />
      <SearchBar />
      <HeaderNav />
    </header>
  );
}
