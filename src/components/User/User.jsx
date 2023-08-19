import React from "react";
import { useSelector } from "react-redux";
import {
  selectIsUserLoading,
  selectUserByID,
} from "../../store/entities/user/selectors";

export const User = ({ userID }) => {
  const user = useSelector((state) => selectUserByID(state, { userID }));

  const isLoading = useSelector(selectIsUserLoading);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <div>{user?.name}</div>;
};
