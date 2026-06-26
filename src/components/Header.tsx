"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
  myName: string;
}

export default function Header({ myName }: HeaderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

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
        <Link href="/" className="header-logo hover:opacity-80 transition-opacity cursor-pointer flex items-center" aria-label="Home">
          <svg className="w-8 h-8 hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.5 2 2 6 2 12c0 5 3.5 8.5 10 10 6.5-1.5 10-5 10-10 0-6-4.5-10-10-10z"
              fill="#FF3B30"
            />
            <path
              d="M4.5 11c1.5-2 4-2.5 6-1 0 1-1 3.5-2.5 4.5-1.5-1.5-3-2.5-3.5-3.5z"
              fill="#000000"
            />
            <path
              d="M5.5 11c1-1.3 3-1.8 4.5-.8 0 .8-.8 2.8-2 3.6-1-1.2-2-2-2.5-2.8z"
              fill="#FFFFFF"
            />
            <path
              d="M19.5 11c-1.5-2-4-2.5-6-1 0 1 1 3.5 2.5 4.5 1.5-1.5 3-2.5 3.5-3.5z"
              fill="#000000"
            />
            <path
              d="M18.5 11c-1-1.3-3-1.8-4.5-.8 0 .8.8 2.8 2 3.6 1-1.2 2-2 2.5-2.8z"
              fill="#FFFFFF"
            />
          </svg>
        </Link>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="theme-toggle-btn p-2.5 rounded-full border border-border-custom/40 hover:border-accent/60 bg-background/50 hover:bg-accent/5 text-foreground/80 hover:text-accent transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
