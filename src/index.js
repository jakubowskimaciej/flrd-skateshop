import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'views/App';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'utils/GlobalStyles';
import theme from 'utils/theme';
import 'utils/font.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
