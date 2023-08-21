import React, { useEffect, useState } from "react";
import { restaurants } from "./constants/fixtures";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";

import "./index.css";
import { Provider, useDispatch } from "react-redux";
import { loadUserIfNotExist } from "./store/entities/user/thunks/loadUserIfNotExist";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserIfNotExist());
  }, []);

  return (
    <div>
      <RestaurantPage />
    </div>
  );
};

// if there are multiple providers, inner elements wil get values from closest provider
// if the no provider is used, u can still get context value, but it will be set to default

// somehow (later on it will be explained) this form of wrapping is optimized, cos it causes less renders
