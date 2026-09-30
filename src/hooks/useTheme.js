import { useEffect } from "react";
import { useState } from "react";
import { getStorage, setStorage } from "../utils/localStorage";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return getStorage("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    setStorage("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
