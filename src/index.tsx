import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './context/user';
import { LightTheme } from './design-system';
import GlobalStyles from './design-system/global-styles';
import reportWebVitals from './reportWebVitals';
import Router from './router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <Global styles={GlobalStyles} />
      <UserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
