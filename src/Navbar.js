import React from 'react';
import styled from 'styled-components';
import { Link as UnstyledLink } from '@reach/router';

const StyledNavbar = styled.div`
  position: absolute;
  top: 0;
  height: var(--nav-height);
  width: 100vw;
  background-color: var(--color-navbar-core);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: flex;
  color: #edf6f9;

  .activeNavLink {
    color: #e2285f;
    text-decoration: none;
    font-size: 1.6rem;
    margin-right: 15px;
    transition: color 0.3s ease-in-out;
  }

  .activeNavLink :hover {
    color: #ea638c;
  }
`;

const Link = styled(UnstyledLink)`
  color: #edf6f9;
  text-decoration: none;
  font-size: 1.6rem;
  margin-right: 15px;
  transition: color 0.3s ease-in-out;
  :hover {
    color: #ea638c;
  }
`;

const isActive = ({ isCurrent }) =>
  isCurrent ? { className: 'activeNavLink' } : {};

const Navbar = () => (
  <StyledNavbar hidden={true}>
    <StyledNav>
      <Link getProps={isActive} to="/home">
        Home
      </Link>
      <Link getProps={isActive} to="/card">
        Card
      </Link>
      <Link getProps={isActive} to="/multiselectlist">
        List
      </Link>
      <Link getProps={isActive} to="/animatedcard">
        AnimatedCard
      </Link>
      <Link getProps={isActive} to="/theme">
        Theme
      </Link>
      <Link getProps={isActive} to="/about">
        About
      </Link>
    </StyledNav>
  </StyledNavbar>
);

export default Navbar;
