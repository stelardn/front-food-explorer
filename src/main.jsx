import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import { AuthProvider } from "./hooks/auth";

import GlobalStyle from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
