import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Blogify</h2>
      <ul>
        <li><Link to="/">All Blogs</Link></li>
        <li><Link to="/new">New Blog</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; // ✅ this line is required
