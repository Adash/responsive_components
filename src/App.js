import React from 'react';
import './App.css';
import styled from 'styled-components';
import Card from './components/Card';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #edf6f9;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <StyledApp>
      <Wrapper>
        <Card />
      </Wrapper>
    </StyledApp>
  );
}

export default App;
