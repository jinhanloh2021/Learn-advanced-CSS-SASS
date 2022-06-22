import React from 'react';
import './container.scss';
import Header from './header/Header';
import Content from './content/Content';

// type Props = {}; //interface definition

export default function Container(): JSX.Element {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}
