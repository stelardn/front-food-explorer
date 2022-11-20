import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UpdateMeal } from './Pages/UpdateMeal';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UpdateMeal />
    </ThemeProvider>
  </React.StrictMode>
)
