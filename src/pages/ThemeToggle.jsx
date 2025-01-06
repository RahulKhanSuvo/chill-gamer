import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex flex-col items-center justify-center w-10 h-32 bg-[#F80136]  p-2 relative">
      <FaSun
        className={`text-yellow-500 mb-2 ${
          theme === "light" ? "opacity-100" : "opacity-30"
        }`}
      />

      <div
        className={`w-5 h-10 bg-orange-400 rounded-full cursor-pointer relative transition-all duration-300`}
        onClick={toggleTheme}
      >
        <div
          className={`size-5 bg-white rounded-full absolute top-0 left-0 transition-all duration-300 ${
            theme === "dark" ? "translate-y-6" : "translate-y-0"
          }`}
        />
      </div>

      <FaMoon
        className={`text-white mt-2 ${
          theme === "dark" ? "opacity-100" : "opacity-30"
        }`}
      />
    </div>
  );
};

export default ThemeToggle;
