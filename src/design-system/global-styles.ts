import { css } from '@emotion/react';

const GlobalStyles = css`
  @font-face {
    font-family: Nunito;
    src: url(${process.env.PUBLIC_URL + 'Nunito-Light.ttf'});
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Nunito;
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
