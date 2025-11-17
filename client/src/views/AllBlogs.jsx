import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Navbar from "./../components/Navbar";
import { getCurrentUser } from "./../util";

function AllBlogs() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/blogs?author=${user?._id || ""}`
      );

      // SAFE SET
      setBlogs(response?.data?.data || []);
    } catch (err) {
      console.log("Error fetching blogs:", err);
      setBlogs([]); // fallback
    }
  };

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  useEffect(() => {
    if (user !== null) {
      fetchBlogs();
    }
  }, [user]);

  return (
    <div className="container mx-auto p-4">
      <Navbar />

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            author={blog.author}
            updatedAt={blog.updatedAt}
            publishedAt={blog.publishedAt}
            status={blog.status}
            category={blog.category}
            slug={blog.slug}
            viewCount={blog.viewCount}
          />
        ))
      )}
    </div>
  );
}

export default AllBlogs;
