import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons — npm install lucide-react

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-sky-800/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo (LHS) */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-white hover:text-sky-300 transition duration-300"
        >
          Blogify
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition duration-300 ${
                  isActive
                    ? "text-sky-300 border-b-2 border-sky-300"
                    : "text-gray-100 hover:text-sky-300"
                }`
              }
            >
              All Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/new"
              className={({ isActive }) =>
                `font-medium transition duration-300 ${
                  isActive
                    ? "text-sky-300 border-b-2 border-sky-300"
                    : "text-gray-100 hover:text-sky-300"
                }`
              }
            >
              New Blog
            </NavLink>
          </li>

          {/* New Edit Blog Link */}
          <li>
            <NavLink
              to="/edit"
              className={({ isActive }) =>
                `font-medium transition duration-300 ${
                  isActive
                    ? "text-sky-300 border-b-2 border-sky-300"
                    : "text-gray-100 hover:text-sky-300"
                }`
              }
            >
              Edit Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `font-medium transition duration-300 ${
                  isActive
                    ? "text-sky-300 border-b-2 border-sky-300"
                    : "text-gray-100 hover:text-sky-300"
                }`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `font-medium transition duration-300 ${
                  isActive
                    ? "text-sky-300 border-b-2 border-sky-300"
                    : "text-gray-100 hover:text-sky-300"
                }`
              }
            >
              Signup
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-sky-300 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-sky-900/95 border-t border-sky-700 animate-slideDown">
          <ul className="flex flex-col space-y-3 p-4 text-center">
            <li>
              <Link
                to="/"
                className="block text-gray-200 hover:text-sky-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                All Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/new"
                className="block text-gray-200 hover:text-sky-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                New Blog
              </Link>
            </li>
            <li>
              <Link
                to="/edit"
                className="block text-gray-200 hover:text-sky-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Edit Blog
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block text-gray-200 hover:text-sky-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block text-gray-200 hover:text-sky-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
