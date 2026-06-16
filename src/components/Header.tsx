"use client";

import { useEffect, useState } from "react";

interface HeaderProps {
  myName: string;
}

export default function Header({ myName }: HeaderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light"); // eslint-disable-line react-hooks/set-state-in-effect

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border-custom/20 transition-colors duration-500">
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-serif text-lg font-bold tracking-tight text-foreground/90 hover:opacity-80 transition-opacity">
          {myName}
        </div>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2.5 rounded-full border border-border-custom/40 hover:border-accent/60 bg-background/50 hover:bg-accent/5 text-foreground/80 hover:text-accent transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {theme === "dark" ? (
            <svg
              className="w-4 h-4 transition-transform duration-500 rotate-0 hover:rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="12" cy="12" r="5" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 transition-transform duration-500 rotate-0 hover:-rotate-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
