import React from 'react';
import './searchBar.scss';
import SearchButton from './searchButton/SearchButton';

export default function SearchBar(): JSX.Element {
  return (
    <form action="#" className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search hotels"
      ></input>
      <SearchButton link="icons/symbol-defs.svg#icon-magnifying-glass" />
    </form>
  );
}
