import React, { useState } from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  font-family: x-locale-body, sans-serif;
  /* height: 600px; */
  width: 250px;
  border: 1px solid #accfcd;
  border-bottom: none;
  border-radius: 5px;
  background-color: white;
  filter: drop-shadow(0.1rem 0.1rem 0.3rem #accfcd);
`;

const StyledListElement = styled.div`
  cursor: pointer;
  padding: 1rem 1rem 1rem 1rem;
  border-bottom: 1px solid #accfcd;
  background-color: ${({ selected }) => (selected ? '#C9E0DE' : 'white')};
  color: #668183;

  :hover {
    background-color: #e5f0ef;
    color: #75a3a1;
  }
`;

const ListItemText = styled.span`
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-weight: lighter;
`;

const ListElement = ({ text }) => {
  const [selected, setSelected] = useState(false);
  return (
    <StyledListElement
      onClick={() => {
        setSelected((prevState) => !prevState);
      }}
      selected={selected}
    >
      <ListItemText>{text}</ListItemText>
    </StyledListElement>
  );
};

const MultiSelectList = () => {
  return (
    <ListWrapper>
      <ListElement text="item 1" />
      <ListElement text="item 2" />
      <ListElement text="item 3" />
      <ListElement text="item 4" />
      <ListElement text="item 5" />
      <ListElement text="item 6" />
    </ListWrapper>
  );
};

export default MultiSelectList;
