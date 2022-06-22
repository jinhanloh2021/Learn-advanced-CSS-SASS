import React from 'react';
import './searchButton.scss';

type Props = { link: string };

export default function SearchButton({ link }: Props): JSX.Element {
  return (
    <button className="button">
      <svg className="icon">
        <use xlinkHref={link}></use>
      </svg>
    </button>
  );
}
