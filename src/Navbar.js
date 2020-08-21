import React from 'react';
import styled from 'styled-components';
import { Link as UnstyledLink } from '@reach/router';

const StyledNavbar = styled.div`
  position: absolute;
  top: 0;
  height: 3rem;
  width: 100vw;
  background-color: #282828;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: flex;
  color: #edf6f9;
`;

const Link = styled(UnstyledLink)`
  color: #edf6f9;
  text-decoration: none;
  font-size: 1.8rem;
  margin-right: 10px;
  transition: color 0.3s ease-in-out;
  :hover {
    color: #ea638c;
  }
`;

const Navbar = () => (
  <StyledNavbar hidden={true}>
    <StyledNav>
      <Link to="/home">Home</Link>
      <Link to="/card">Card</Link>
      <Link to="/multiselectlist">List</Link>
      <Link to="/about">About</Link>
    </StyledNav>
  </StyledNavbar>
);

export default Navbar;
