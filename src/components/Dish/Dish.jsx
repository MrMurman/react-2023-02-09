import React, { useState } from "react";
import { Button } from "../Button/Button";
import { DishButtons } from "./DishButtons";
import { DishIngredients } from "./DishIngredients";

export const Dish = ({ menu }) => {
  const { name, ingredients } = menu;
  let [selectedNumbersOfDishes, updateNumberOfDishes] = useState(0);

  const updateDishesCount = function (add) {
    let newNumberOfDishes = selectedNumbersOfDishes;

    if (add && selectedNumbersOfDishes < 6) {
      newNumberOfDishes += 1;
    } else if (!add && selectedNumbersOfDishes > 0) {
      newNumberOfDishes -= 1;
    }

    updateNumberOfDishes(newNumberOfDishes);
  };

  return (
    <>
      <div>
        <span>{name}</span>

        <DishButtons
          onClick={updateDishesCount}
          selectedNumbersOfDishes={selectedNumbersOfDishes}
        />
      </div>
      <ul>
        {selectedNumbersOfDishes > 0
          ? ingredients.map((ingredient) => (
              <DishIngredients ingredient={ingredient} />
            ))
          : null}
      </ul>
    </>
  );
};
