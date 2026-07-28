"use client";

import { RiComputerLine, RiMoonClearLine, RiSunLine } from "@remixicon/react";
import { useEffect } from "react";
import type { Theme } from "./types";
import { useTheme } from "./use-theme";

const options: { value: Theme; icon: React.ReactNode; label: string }[] = [
  { value: "light", icon: <RiSunLine size={16} />, label: "Light" },
  { value: "system", icon: <RiComputerLine size={16} />, label: "System" },
  { value: "dark", icon: <RiMoonClearLine size={16} />, label: "Dark" },
];

export const ThemeSwitcher = () => {
  const { theme, setTheme, mounted } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "D") {
        const currentIndex = options.findIndex((o) => o.value === theme);
        const next = options[(currentIndex + 1) % options.length];
        setTheme(next.value);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-(--color-border) bg-(--color-secondary) p-1"
      role="group"
      aria-label="Theme switcher"
    >
      {options.map(({ value, icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          title={label}
          aria-label={label}
          aria-pressed={theme === value}
          className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200 cursor-pointer ${
            theme === value
              ? "bg-white/10 text-(--color-primary)"
              : "text-(--color-muted) hover:text-(--color-primary)"
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};
