"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { ThemeContext } from "./theme-context";
import type { Theme } from "./types";

const VALID_THEMES: Theme[] = ["light", "system", "dark"];

const getServerSnapshot = (): Theme => "system";

const getSnapshot = (): Theme => {
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored && VALID_THEMES.includes(stored)) return stored;
  return "system";
};

const resolveTheme = (theme: Theme): "light" | "dark" => {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return theme;
};

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    mediaQuery.removeEventListener("change", callback);
  };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = resolveTheme(theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.add("theme-transitions");
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new StorageEvent("storage"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};
