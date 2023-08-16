import React, { useState } from "react";
import { restaurants } from "./constants/fixtures";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";

import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <RestaurantPage />
      </div>
    </Provider>
  );
};

// if there are multiple providers, inner elements wil get values from closest provider
// if the no provider is used, u can still get context value, but it will be set to default

// somehow (later on it will be explained) this form of wrapping is optimized, cos it causes less renders
