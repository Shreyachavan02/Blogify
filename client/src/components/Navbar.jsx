import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiPlus, FiInfo, FiLogOut } from "react-icons/fi";
import { getCurrentUser } from "../util";

function Navbar() {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="w-full shadow-md bg-gradient-to-r from-blue-200 via-blue-300 to-teal-200 
                    backdrop-blur-lg bg-opacity-70 border-b border-white/30">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-extrabold tracking-wide text-blue-900">
            Blogify
          </h1>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-7 text-gray-800 font-medium">

          {/* Home */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-75 transition text-lg"
          >
            <FiHome className="text-xl" />
            Home
          </Link>

          {/* About */}
          <Link
            to="/about"
            className="flex items-center gap-2 hover:opacity-75 transition text-lg"
          >
            <FiInfo className="text-xl" />
            About
          </Link>

          {/* New Post (only if logged in) */}
          {user && (
            <Link
              to="/new"
              className="flex items-center gap-2 hover:opacity-75 transition text-lg"
            >
              <FiPlus className="text-xl" />
              New Post
            </Link>
          )}

          {/* Login / Signup */}
          {!user && (
            <>
              <Link
                to="/login"
                className="hover:opacity-75 transition text-lg"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hover:opacity-75 transition text-lg"
              >
                Signup
              </Link>
            </>
          )}

          {/* Logout (only if logged in) */}
          {user && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition text-lg"
            >
              <FiLogOut className="text-xl" />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
