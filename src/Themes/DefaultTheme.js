import { createGlobalStyle } from 'styled-components';

const DefaultTheme = createGlobalStyle`
  html {
    --color-background: #edf6f9;
    --color-navbar-core: #282828;
    --color-navbar-accent: #006D77;

    --nav-height: 4rem;
  }
`;

export default DefaultTheme;
