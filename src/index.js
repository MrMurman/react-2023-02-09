import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/Button/Button";
import { App } from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

const SPAN_ID = "123";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
