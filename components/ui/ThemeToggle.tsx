"use client";

import { useSyncExternalStore } from "react";

const THEME_EVENT = "themechange";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
}

function getSnapshot() {
  return document.documentElement.classList.contains("light");
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const next = !isLight;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="flex items-center justify-center w-11 h-11 rounded-full bg-[#1a1a1a] light:bg-white border border-white/5 light:border-black/10 shadow-lg text-gray-400 light:text-gray-500 hover:text-orange-500 transition-colors"
    >
      {isLight ? <i className="fas fa-moon text-lg" /> : <i className="fas fa-sun text-lg" />}
    </button>
  );
}
