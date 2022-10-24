import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  --font: 'Roboto', sans-serif;
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font);
  }
`;

export default GlobalStyle;
