import React, { useContext } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { BUTTON_VIEW_VARIANT } from "./constants";
import { SIZE } from "../../constants/size";

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  size = SIZE.m,
  viewVariant = BUTTON_VIEW_VARIANT.primary,
}) => {
  return (
    <button
      className={classNames(
        styles.root,
        styles[size],
        styles[viewVariant],
        className,
        {
          [styles.disabled]: disabled,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// one way to write styles -- not preferable.
// {`${styles.root} ${className || ""} ${styles[size]} ${styles[viewVariant]}`}
