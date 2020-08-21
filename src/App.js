import React, { useState } from 'react';
import './App.css';
import ThemeSelector from './Themes/ThemeSelector';
import ThemePage from './Themes/ThemePage';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Router } from '@reach/router';
import Card from './components/Cards/PizzaCard';
import MultiSelectList from './components/MultiSelectList/MultiSelectList';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
`;

const WrapperRouter = styled(Router)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
`;

const StyledShowNavButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 55px;
  height: var(--nav-height);
  background-color: ${(props) =>
    props.showNav ? 'var(--color-navbar-accent)' : 'var(--color-navbar-core)'};
  border: none;
  border-radius: 0% 0% 5% 0%;
  transition: width 0.5s ease-out, background-color 0.5s ease-out;
  cursor: pointer;
  :hover {
    background-color: #282828;
    width: 100px;
    /* height: 3rem; */
  }
`;

/* const ShowNavButton = () => (
  <StyledShowNavButton/>
) */

function App() {
  const [showNav, setShowNav] = useState(false);
  const [theme, setTheme] = useState('default');

  return (
    <>
      <ThemeSelector theme={theme} />
      <StyledApp>
        <StyledShowNavButton
          showNav={showNav}
          onClick={() => {
            setShowNav((prevState) => !prevState);
          }}
        />
        {showNav ? <Navbar /> : null}
        <WrapperRouter>
          <Card path="/card" />
          <MultiSelectList path="/multiselectlist" />
          <ThemePage path="/theme" theme={theme} setTheme={setTheme} />
        </WrapperRouter>
      </StyledApp>
    </>
  );
}

export default App;
