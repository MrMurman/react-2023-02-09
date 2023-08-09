import React from "react";
import { Button } from "../Button/Button";
import { DishButtons } from "./DishButtons";
import { useState } from "react";

export const DishIngredients = ({ ingredient }) => {
  let [selectedNumbersOfIngredients, updateNumberOfIngredients] = useState(0);

  const updateIngredientCount = function (add) {
    let newNumberOfIngredients = selectedNumbersOfIngredients;

    if (add && selectedNumbersOfIngredients < 6) {
      newNumberOfIngredients += 1;
    } else if (!add && selectedNumbersOfIngredients > 0) {
      newNumberOfIngredients -= 1;
    }

    updateNumberOfIngredients(newNumberOfIngredients);
  };

  return (
    <li>
      <span>{ingredient}</span>
      <DishButtons
        onClick={updateIngredientCount}
        selectedNumbersOfDishes={selectedNumbersOfIngredients}
      />
    </li>
  );
};
