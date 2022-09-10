import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'views/App';
import { Provider } from 'react-redux';
import { store } from './store';

//styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'utils/GlobalStyles';
import theme from 'utils/theme';
import 'utils/font.css';
import { CartProvider } from 'providers/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <CartProvider>
            <App />
          </CartProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
