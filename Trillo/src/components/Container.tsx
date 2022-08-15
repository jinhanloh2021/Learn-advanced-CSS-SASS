import React from 'react';
import './container.scss';
import Header from './header/Header';
import Content from './content/Content';

// type Props = {}; //interface definition
//container adds padding to left and right of entire webpage. Also adds background colour.

export default function Container(): JSX.Element {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}
