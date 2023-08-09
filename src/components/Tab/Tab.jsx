import React from "react";
import { Button } from "../Button/Button";

export const Tab = ({ onClick, title, isActive }) => {
  return <Button children={title} onClick={onClick} disabled={isActive} />;
};
