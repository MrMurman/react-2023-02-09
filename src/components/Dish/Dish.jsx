import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Ingredient } from "../Ingredient/Ingredient";
import { useCount } from "../../hooks/useCount";

export const Dish = ({ dish }) => {
  //const [count, setCount] = useState(0);
  const { count, increment, decrement } = useCount({ max: 6 });

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;
  //const increment = () => setCount(count + 1);

  return (
    <div>
      <div>
        <div>
          <span>{name}</span>-<span>{price}</span>
        </div>
        <div>
          <Button onClick={decrement}>-</Button>
          {count}
          <Button onClick={increment}>+</Button>
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
