import React, { useCallback, useState } from "react";
import { ThemeContext } from "./ThemeContext/context";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");
  const toggleTheme = useCallback(
    () =>
      setTheme((currentTheme) => (currentTheme === "white" ? "dark" : "white")),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// main issues of using this context:
// 1. Use of single context with many states -- if one state changes,
// all 'consumers' of other states will have to re-render

// 2. Use of different contexts -- in a large project it will be very difficult to maintain them
