import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMoon, IoExitOutline, IoHome } from "react-icons/io5"; // Added IoHome for the home icon
import { LuSun } from "react-icons/lu";
import { BiImageAdd } from "react-icons/bi";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { logout, authUser } = useAuthStore();

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
    <div className="fixed top-2 left-4 right-4 z-50 bg-gray-900/70 backdrop-blur-lg rounded-lg border border-teal-400/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Home Button */}
          <div className="ml-5 flex items-center space-x-2">
            <IoHome className="text-teal-400" size={24} /> {/* Home icon */}
            <Link
              to="/app"
              className="text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-300 hover:to-blue-300 transition-all"
            >
              Home
            </Link>
          </div>

          {/* Right: Login (or Logout) and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {authUser ? (
              <>
                <Link
                  to="/app/create"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-teal-400 hover:text-teal-300 transition-all"
                >
                  <BiImageAdd size={20} />
                </Link>
                <button
                  onClick={() => logout()}
                  className="p-2 rounded bg-gray-800 hover:bg-gray-700 text-red-400 hover:text-red-300 transition-all"
                >
                  <IoExitOutline size={20} />
                </button>
              </>
            ) : (
              <Link
                to="/app/login"
                className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-teal-400 hover:text-teal-300 transition-all"
              >
                Login
              </Link>
            )}
            <button
              onClick={toggleTheme}
              className="p-2 rounded bg-gray-800 hover:bg-gray-700 text-teal-400 hover:text-teal-300 transition-all"
            >
              {theme === "light" ? <IoMoon size={20} /> : <LuSun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;