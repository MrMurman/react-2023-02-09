import React, { useState } from "react";
import { restaurants } from "./constants/fixtures";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";

import "./index.css";
import { ThemeContext } from "./contexts/ThemeContext/context";
import { ThemeContextProvider } from "./contexts/provider";
import { StoreProvider } from "./CustomRedux";
import { store } from "./store";

export const App = () => {
  return (
    <StoreProvider store={store}>
      <div>
        <RestaurantPage restaurants={restaurants} />
      </div>
    </StoreProvider>
  );
};

// if there are multiple providers, inner elements wil get values from closest provider
// if the no provider is used, u can still get context value, but it will be set to default

// somehow (later on it will be explained) this form of wrapping is optimized, cos it causes less renders
