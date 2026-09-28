import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectThemeMode } from "../store/themeSlice";

const applyTheme = (mode) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = mode === "dark" || (mode === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", isDark);
};

const ThemeSync = () => {
  const mode = useSelector(selectThemeMode);

  useEffect(() => {
    applyTheme(mode);
    if (mode !== "system") return undefined;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mode]);

  return null;
};

export default ThemeSync;
