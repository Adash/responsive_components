import { createGlobalStyle } from 'styled-components';

const OceanTheme = createGlobalStyle`
  html {
    --color-background: #edf6f9;
    --color-navbar-core: #282828;
    --color-navbar-accent: #006D77;

    --color-core: #75a3a1;
    --color-shade: #accfcd;

    --color-white: #ffffff;

    --nav-height: 4rem;
  }
`;

export default OceanTheme;
