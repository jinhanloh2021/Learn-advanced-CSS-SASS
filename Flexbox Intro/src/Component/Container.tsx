import React from 'react';
import '../Styles/components/Container.css';

type Props = {};

export default function Container({}: Props): JSX.Element {
  return (
    <div className="container">
      <div className="item">1</div>
      <div className="item i2">2</div>
      <div className="item i3">3</div>
      <div className="item">4</div>
      <div className="item i5">5</div>
    </div>
  );
}
