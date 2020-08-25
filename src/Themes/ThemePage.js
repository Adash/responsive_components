import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'var(--color-white)' : 'var(--color-core)',
    backgroundColor: state.isSelected
      ? 'var(--color-core)'
      : 'var(--color-white)',
  }),
};

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
        styles={customStyles}
        menuColor="red"
      />
    </div>
  );
};

export default ThemePage;
