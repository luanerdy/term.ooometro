import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    user-select: none;
    box-sizing: border-box;
  }

  :root {
    --color-primary: #6E5C62;
    --color-secondary: #4C4347;
    --color-right: #3aa394;
    --color-place: #d3ad69;
    --color-wrong: #312a2c;
    --color-wrong-keyboard: #504a4b;
    --color-wrong-letter: #6E5C62;
    --color-next: #615458;
    --color-white: #FAFAFF;
  }

  html {
    background-color: var(--color-primary);
    color: var(--color-white);
    font-family: 'Mitr', sans-serif;
  }
`;

export { GlobalStyle };
