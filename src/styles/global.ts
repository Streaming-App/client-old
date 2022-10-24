import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-base: 'Roboto', sans-serif;

    --color-font: #232323;
    --color-primary: #2940D3;
    --color-secondary: #39A9CB;
    --color-tertiary: #FFEDA3;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-base);
  }
`;

export default GlobalStyle;
