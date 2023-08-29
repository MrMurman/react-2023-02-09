import React from "react";
import { useSelector } from "react-redux";
import { selectCartEntries } from "../../store/cart/selectors";

export const Cart = () => {
  //const cart = useSelector((state) => selectCartEntries(state));
  const cart = useSelector(selectCartEntries);

  return (
    <ul>
      {cart.map(([name, count]) => (
        <li key={name}>
          {name} : {count}
        </li>
      ))}
    </ul>
  );
};
