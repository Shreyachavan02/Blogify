import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../util";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-700 text-white p-4 rounded mb-4 flex justify-between items-center">
      <div className="font-semibold">
        {user ? "Blogify" : "Welcome, Guest!"}
      </div>
      <div className="space-x-4">
        <Link className="hover:text-yellow-300" to="/">Home</Link>
        {user && <Link className="hover:text-yellow-300" to="/new">New Blog</Link>}
        {!user && <Link className="hover:text-green-300" to="/login">Login</Link>}
        {!user && <Link className="hover:text-green-300" to="/signup">Signup</Link>}
        {user && <button className="hover:text-red-400 cursor-pointer" onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}

export default Navbar;
