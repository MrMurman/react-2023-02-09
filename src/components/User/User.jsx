import React from "react";
import { useSelector } from "react-redux";
import { selectUserByID } from "../../store/entities/user/selectors";

export const User = ({ userID }) => {
  const user = useSelector((state) => selectUserByID(state, { userID }));

  return <div>{user?.name}</div>;
};
