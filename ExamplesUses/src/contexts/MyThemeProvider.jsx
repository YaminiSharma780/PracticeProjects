import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function MyThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
