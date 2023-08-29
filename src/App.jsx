import React, { useEffect, useState } from "react";
import { restaurants } from "./constants/fixtures";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";

import "./index.css";
import { Provider, useDispatch } from "react-redux";
import { loadUserIfNotExist } from "./store/entities/user/thunks/loadUserIfNotExist";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage/CartPage";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Restaurant } from "./components/Restaurant/Restaurant";
import { Menu } from "./components/Menu/Menu";
import { Review } from "./components/Review/Review";
import { Reviews } from "./components/Reviews/Reviews";
import { AllDishesPage } from "./pages/AllDishesPage/AllDishesPage";
import { SpecificDishPage } from "./pages/SpecificDishPage/SpecificDishPage";

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
            <Route index element={<span>Select restaurant</span>} />
            {/* only one index path and "*" per level of nesting */}
            <Route path=":restaurantID" element={<Restaurant />}>
              <Route index element={<Navigate to="menu" replace />} />
              <Route path="menu" element={<Menu />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            {/*: inside path means that it is placeholder text. This text can be virtually anything */}
          </Route>
          <Route path=":allDishes" element={<AllDishesPage />} />
          {/* <Route path=":dishID" element={<SpecificDishPage />} /> */}
          {/* </Route> */}
          <Route path=":allDishes/:dishID" element={<SpecificDishPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="redirect" element={<Navigate to="/" replace />} />
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
