import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Ingredient } from "../Ingredient/Ingredient";
import styles from "./styles.module.css";
import { SIZE } from "../../constants/size";
import { BUTTON_VIEW_VARIANT } from "../Button/constants";

import Plus from "./img/thumb-up-optimized.svg";
import Minus from "./img/thumb-down-optimized.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectDishCount } from "../../store/cart/selectors";
import { selectDishByID } from "../../store/entities/dish/selectors";
import classNames from "classnames";
import { Link, useParams, useSearchParams } from "react-router-dom";
// import { ReactComponent as Plus } from "./img/thumb-up-optimized.svg";

export const Dish = ({ dishID, className }) => {
  const dish = useSelector((state) => selectDishByID(state, dishID)); //used to be {dishID}, but we changed selector
  //const [count, setCount] = useState(0);
  //const { count, increment, decrement } = useCount({ max: 6 });
  const { allDishes } = useParams();

  const count = useSelector((state) =>
    selectDishCount(state, { dishName: dish?.name })
  );
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "incrementDish", payload: dish.name });
  };
  const decrement = () => {
    dispatch({ type: "decrementDish", payload: dish.name });
  };

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;
  //const increment = () => setCount(count + 1);

  return (
    <div className={classNames(styles.root, className)}>
      {/* normally u use className as className="root" but simple css import makes it global */}
      {/* in order to have local css imports, modules are required. They are handled a bit differently */}
      {/* style={{ backgroundColor: "red", color: "white" }} this is entered inside div*/}
      <div className={styles.dish}>
        <div className={styles.title}>
          {allDishes ? (
            <Link>{name}</Link>
          ) : (
            <div>
              <span>{name}</span> - <span>{price}</span>
            </div>
          )}
        </div>
        {allDishes ? null : (
          <div className={styles.action}>
            <Button
              onClick={decrement}
              className={styles.action}
              size={SIZE.s}
              viewVariant={BUTTON_VIEW_VARIANT.secondary}
              disabled={count === 0}
            >
              <img className={styles.decrementActionImg} src={Minus} alt="-" />
            </Button>
            {count}
            <Button
              onClick={increment}
              className={styles.action}
              size={SIZE.s}
              viewVariant={BUTTON_VIEW_VARIANT.secondary}
              disabled={count === 6}
            >
              {/* <div className={styles.incrementActionContent}/>  -- used for unimportant content ie background */}
              <img className={styles.incrementActionImg} src={Plus} alt="+" />
              {/* use for important content */}
              {/* <Plus /> */}
              {/* via React elem -- used to have a greater control upon SVG's. But if they are heavy, this will greatly decrease performance*/}
            </Button>
          </div>
        )}
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
