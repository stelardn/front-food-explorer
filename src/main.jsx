import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ViewMeal } from './Pages/ViewMeal';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ViewMeal />
    </ThemeProvider>
  </React.StrictMode>
)
