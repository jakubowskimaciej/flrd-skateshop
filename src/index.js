import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'views/App';
import { UsersProvider } from 'providers/UsersProvider';
import { CategoriesProvider } from 'providers/CategoriesProvider';

//styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'utils/GlobalStyles';
import theme from 'utils/theme';
import 'utils/font.css';
import { CartProvider } from 'providers/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <UsersProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UsersProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
