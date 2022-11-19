import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ViewOrder } from './Pages/ViewOrder';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ViewOrder />
    </ThemeProvider>
  </React.StrictMode>
)
