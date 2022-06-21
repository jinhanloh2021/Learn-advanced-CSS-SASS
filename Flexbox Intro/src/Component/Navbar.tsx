import React from 'react';
import styled from 'styled-components';
// import { theme } from './Styles/_base';
// import '../Styles/Navbar.css';

//practice using styled components, instead of using SASS.
const StyledNavBar = styled.div<IProps>`
  a {
    &:link {
      color: ${(props) => props.theme.primary};
      text-decoration: none;
    }
    &:visited {
      color: ${(props) => props.theme.tertiary};
    }
    &:hover {
      color: ${(props) => props.theme.secondary};
    }
  }
`;

interface IProps {
  theme: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}
// export const Navbar: React.FC<IProps> = (props): JSX.Element =>

export default function Navbar(props: IProps): JSX.Element {
  return (
    <StyledNavBar theme={props.theme}>
      <a href="/home">Home</a>
      <a href="/about">About us</a>
      <a href="/profile">Profile</a>
      <a href="/contact">Contact</a>
    </StyledNavBar>
  );
}
