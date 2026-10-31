import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  // Start from whatever the script in index.html already set
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#05030a" : "#f7f4fc");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage may be unavailable in some browsing contexts.
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}