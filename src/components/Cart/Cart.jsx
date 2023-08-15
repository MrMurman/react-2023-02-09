import React from "react";
import { useSelector } from "../../CustomRedux";

export const Cart = () => {
  const cart = useSelector((state) => Object.entries(state));

  return (
    <ul>
      {cart.map(([name, count]) => (
        <li>
          {name} : {count}
        </li>
      ))}
    </ul>
  );
};
