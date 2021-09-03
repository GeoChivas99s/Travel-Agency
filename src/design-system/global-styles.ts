import { css } from '@emotion/react';

const GlobalStyles = css`
  @font-face {
    font-family: Raleway;
    src: url('../../public/Raleway-VariableFont_wght.ttf');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Raleway;
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyles;
