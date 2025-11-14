import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import AllBlogs from "./views/AllBlogs";
import NewBlog from "./views/NewBlog";
import EditBlog from "./views/EditBlog";
import Signup from './views/Signup';
import Login from "./views/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ import Footer

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar /> {/* ✅ Navbar on all pages */}

    <Routes>
      <Route path="/" element={<AllBlogs />} />
      <Route path="/newblog" element={<NewBlog />} />
      <Route path="/edit/:id" element={<EditBlog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="*"
        element={<h1 className="text-center mt-5">404 Not Found</h1>}
      />
    </Routes>

    <Footer /> {/* ✅ Footer appears on all pages */}
  </BrowserRouter>
);
