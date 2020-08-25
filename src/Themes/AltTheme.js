import { createGlobalStyle } from 'styled-components';

const AltTheme = createGlobalStyle`
  html {
    --color-background: #ffffff;
    --color-navbar-core: #006D77;
    --color-navbar-accent: #282828;

    --color-core: #006d77;
    --color-shade: #0096a3;

    --color-white: #ffffff;
    
    --nav-height: 4rem;

  }
`;

export default AltTheme;
