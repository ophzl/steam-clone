import React, { createContext, useContext, useEffect, useState } from "react";
import { getSetting } from "../libs/localStorage";
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("bg-black");
  const [background, setBackground] = useState("");

  useEffect(
    () =>
      setTheme(getSetting("vapor_theme", "bg-black")) &&
      setBackground(getSetting("vapor_background", "")),
    []
  );

  return (
    <ThemeContext.Provider
      value={{ background, setBackground, theme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
