import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FaPlusSquare } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="max-w-5xl px-4 mx-auto">
      <div className="flex items-center justify-between h-16 flex-col sm:flex-row">
        <h1 className="text-2xl sm:text-3xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center">
          <Link to="/">Product Store 🛒</Link>
        </h1>
        <div className="flex items-center space-x-2">
          <Link to="/create">
            <button className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
              <FaPlusSquare size={20} />
            </button>
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {theme === "light" ? <IoMoon size={20} /> : <LuSun size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
