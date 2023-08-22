import React from "react";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

export const Tab = ({ to, title, className }) => {
  //                { onClick, title, isActive, className }
  return (
    <NavLink to={to} className={className}>
      {({ isActive }) => (
        <Button
          disabled={isActive}
          children={title}
          // onClick={onClick}
          // disabled={isActive}
        />
      )}
    </NavLink>
  );
};
