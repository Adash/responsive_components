import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem;
`;

const Home = () => (
  <HomeWrapper>
    <h1>Home</h1>
  </HomeWrapper>
);

export default Home;
