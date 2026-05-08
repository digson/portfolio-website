"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check initial theme preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const isDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    
    if (isDark) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Avoid hydration mismatch by not rendering the toggle until mounted
  if (!mounted) {
    return <div className="p-2 w-9 h-9" />; // Empty spacer with same dimensions
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 hover:ring-blue-400 transition-all"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <span className="text-yellow-400">☀️</span>
      ) : (
        <span className="text-slate-700">🌙</span>
      )}
    </button>
  );
}