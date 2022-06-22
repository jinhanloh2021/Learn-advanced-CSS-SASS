import React from 'react';
import Hotelview from './hotelview/Hotelview';
import Sidebar from './sidebar/Sidebar';
import './content.scss';

type Props = {};

export default function Content({}: Props) {
  return (
    <div className="content">
      <Sidebar />
      <Hotelview />
    </div>
  );
}
