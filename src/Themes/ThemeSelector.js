import React from 'react';
import OceanTheme from './OceanTheme';
import AltTheme from './AltTheme';

// provides the switching mechanism for selecting the global style for the whole app
// the global style's sole purpose is to provide the global variables for the whole app

const ThemeSelector = ({ theme }) => {
  switch (theme) {
    case 'Ocean':
      return <OceanTheme />;
    case 'alt':
      return <AltTheme />;
    default:
      return <OceanTheme />;
  }
};

export default ThemeSelector;
