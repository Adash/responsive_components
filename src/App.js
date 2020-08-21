import React, { useState } from 'react';
import './App.css';
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
  background-color: #edf6f9;
`;

const StyledShowNavButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 35px;
  height: 3rem;
  background-color: ${(props) => (props.showNav ? '#282828' : '#8b8f91')};
  border: none;
  border-radius: 0% 0% 5% 0%;
  transition: width 0.5s ease-out, background-color 0.5s ease-out;
  :hover {
    background-color: #282828;
    width: 100px;
    height: 3rem;
  }
`;

/* const ShowNavButton = () => (
  <StyledShowNavButton/>
) */

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
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
      </WrapperRouter>
    </StyledApp>
  );
}

export default App;
