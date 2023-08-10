import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Ingredient } from "../Ingredient/Ingredient";

export const Dish = ({ dish }) => {
  // const { name, ingredients } = menu;
  // let [selectedNumbersOfDishes, updateNumberOfDishes] = useState(0);

  // const updateDishesCount = function (add) {
  //   let newNumberOfDishes = selectedNumbersOfDishes;

  //   if (add && selectedNumbersOfDishes < 6) {
  //     newNumberOfDishes += 1;
  //   } else if (!add && selectedNumbersOfDishes > 0) {
  //     newNumberOfDishes -= 1;
  //   }

  //   updateNumberOfDishes(newNumberOfDishes);
  // };

  const [count, setCount] = useState(0);

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;
  const increment = () => setCount(count + 1);

  return (
    <div>
      <div>
        <div>
          <span>{name}</span>-<span>{price}</span>
        </div>
        <div>
          <Button onClick={() => setCount(count - 1)} disabled={count === 0}>
            -
          </Button>
          {count}
          <Button onClick={() => setCount(count + 1)} disabled={count === 6}>
            +
          </Button>
        </div>
      </div>
      {count > 0 && !!ingredients.length && (
        <div>
          {ingredients.map((ingredient) => (
            <Ingredient name={ingredient} />
          ))}
        </div>
      )}
    </div>

    // <>
    //   <div>
    //     <span>{name}</span>

    //     <DishButtons
    //       onClick={updateDishesCount}
    //       selectedNumbersOfDishes={selectedNumbersOfDishes}
    //     />
    //   </div>
    //   <ul>
    //     {selectedNumbersOfDishes > 0
    //       ? ingredients.map((ingredient) => (
    //           <DishIngredients ingredient={ingredient} />
    //         ))
    //       : null}
    //   </ul>
    // </>
  );
};
