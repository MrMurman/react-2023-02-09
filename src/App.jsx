import React from "react";
import { restaurants } from "./constants/fixtures";

export const App = () => {
  return (
    <div>
      <RestaurantPage restaurants={restaurants} />
    </div>
  );
};
