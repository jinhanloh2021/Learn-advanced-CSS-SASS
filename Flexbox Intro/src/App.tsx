import React from 'react';
import Navbar from './Component/Navbar';
import Container from './Component/Container';

export const theme = {
  primary: '#fefefe',
  secondary: '#000000',
  tertiary: '#3b92fb',
};

function App() {
  return (
    <>
      <Navbar theme={theme} />
      <Container />
    </>
  );
}

export default App;
