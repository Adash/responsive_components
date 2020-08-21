import React from 'react';
import DefaultTheme from './DefaultTheme';
import AltTheme from './AltTheme';

// provides the switching mechanism for selecting the global style for the whole app
// the global style's sole purpose is to provide the global variables for the whole app

const ThemeSelector = ({ theme }) => {
  switch (theme) {
    case 'default':
      return <DefaultTheme />;
    case 'alt':
      return <AltTheme />;
    default:
      return <DefaultTheme />;
  }
};

export default ThemeSelector;
