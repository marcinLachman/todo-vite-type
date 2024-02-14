import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";

import { ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#40A2E3",
    },
    secondary: {
      main: "#0D9276",
    },
    success: {
      main: "#BBE2EC",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
