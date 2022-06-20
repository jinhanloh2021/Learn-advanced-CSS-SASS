import React from 'react';
import '../Styles/Navbar.css';
import Heading from './NavBarStyle';

const Navbar: React.FC<{}> = () => {
  return (
    <>
    <div className='navBar'>
      <a href='/home'>Home</a>
      <a href='/about'>About us</a>
      <a href='/profile'>Profile</a>
      <a href='/contact'>Contact</a>
    </div>
    <div>
      <Heading>
        <span>Hello</span> world
      </Heading>
    </div>
    </>
  )
}

export default Navbar;