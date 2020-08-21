import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const options = [
  { value: 'default', label: 'Ocean' },
  { value: 'alt', label: 'Alternative' },
];
const ThemePage = ({ theme, setTheme }) => {
  return (
    <div>
      <h1>Select theme</h1>
      <Select
        onChange={(value) => {
          setTheme(value.value);
        }}
        options={options}
        menuColor="red"
      />
    </div>
  );
};

export default ThemePage;
