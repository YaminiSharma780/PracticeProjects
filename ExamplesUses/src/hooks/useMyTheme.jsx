import { useContext } from "react";
import { ThemeContext } from "../contexts/MyThemeProvider";

export function useMyTheme() {
  return useContext(ThemeContext);
}
