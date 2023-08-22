import React, { useEffect, useState } from "react";
import { restaurants } from "./constants/fixtures";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";

import "./index.css";
import { Provider, useDispatch } from "react-redux";
import { loadUserIfNotExist } from "./store/entities/user/thunks/loadUserIfNotExist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage/CartPage";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Restaurant } from "./components/Restaurant/Restaurant";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserIfNotExist());
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="restaurants" element={<RestaurantPage />}>
            <Route path=":restaurantID" element={<Restaurant />}></Route>
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <RestaurantPage /> */}
      </div>
    </BrowserRouter>
  );
};

// if there are multiple providers, inner elements wil get values from closest provider
// if the no provider is used, u can still get context value, but it will be set to default

// somehow (later on it will be explained) this form of wrapping is optimized, cos it causes less renders
