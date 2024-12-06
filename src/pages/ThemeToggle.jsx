import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

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
        className={`w-6 h-12 bg-orange-400 rounded-full cursor-pointer relative transition-all duration-300 ${
          theme === "dark" ? "translate-y-0" : "translate-y-0"
        }`}
        onClick={toggleTheme}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full absolute top-0 left-0 transition-all duration-300 ${
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
