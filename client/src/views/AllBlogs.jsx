import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { getCurrentUser } from "../util";

const AllBlogs = () => {
    const [openBlog, setOpenBlog] = useState(null);
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [commentText, setCommentText] = useState({});
    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

    const blogs = [
        {
            id: 1,
            title: "The Power of Mindful Coding",
            author: "Shreya Chavan",
            date: "Nov 12, 2025",
            excerpt:
                "Explore how mindfulness improves focus, creativity, and productivity in software development.",
            content:
                "Mindful coding is about being fully present while you code. It’s not just about writing lines of code—it’s about understanding the flow, structure, and logic behind them. By practicing mindfulness, developers reduce stress, make fewer errors, and boost creativity. Regular breaks, calm focus, and intention-driven coding make your workflow more efficient and enjoyable.",
        },
        {
            id: 2,
            title: "Top 5 React Practices for 2025",
            author: "Blogify Team",
            date: "Nov 10, 2025",
            excerpt:
                "Discover essential tips to write cleaner, scalable React code using hooks and reusable components.",
            content:
                "In 2025, React developers emphasize modularity and performance. Using custom hooks, memoization, and lazy loading ensures your app runs efficiently. Avoid prop drilling by using context wisely. Consistent folder structure and reusable UI patterns help scale your React apps faster.",
        },
        {
            id: 3,
            title: "Understanding Async JavaScript",
            author: "Rahul Mehta",
            date: "Nov 8, 2025",
            excerpt:
                "Promises, async/await, and callbacks can be confusing—let’s simplify them for you.",
            content:
                "Asynchronous programming allows JavaScript to handle multiple tasks without blocking. Promises represent a value that may be available now or later, while async/await syntax makes asynchronous code look synchronous, improving readability and reducing errors.",
        },
        {
            id: 4,
            title: "Why You Should Learn TypeScript",
            author: "Priya Nair",
            date: "Nov 6, 2025",
            excerpt:
                "TypeScript is no longer optional—it's a must-have for scalable frontend development.",
            content:
                "TypeScript introduces type safety, better tooling, and improved collaboration in teams. It prevents runtime errors by catching bugs early during development, making codebases more maintainable and scalable.",
        },
        {
            id: 5,
            title: "Mastering CSS Animations",
            author: "Aarav Patel",
            date: "Nov 5, 2025",
            excerpt:
                "Animations bring life to web apps. Here’s how to use them smartly with CSS transitions and keyframes.",
            content:
                "CSS animations enhance user experience when used subtly. Transitions make state changes smoother, while keyframes allow complex motion effects. The key is balance—animations should support usability, not distract from it.",
        },
        {
            id: 6,
            title: "Building REST APIs with Node.js",
            author: "Blogify Backend Team",
            date: "Nov 3, 2025",
            excerpt:
                "A complete guide to designing secure and scalable RESTful APIs with Express and MongoDB.",
            content:
                "Building REST APIs in Node.js involves structuring routes, controllers, and middleware. Proper error handling, authentication, and validation make your API reliable. Always document endpoints and follow REST principles for clarity.",
        },
        {
            id: 7,
            title: "UI/UX Trends to Watch in 2025",
            author: "Sneha More",
            date: "Nov 1, 2025",
            excerpt:
                "Minimalism, 3D graphics, and micro-interactions are shaping the modern web experience.",
            content:
                "Modern UI/UX focuses on user delight—animations, intuitive layouts, and personalization. The rise of AI-driven design tools will make interfaces smarter, more adaptive, and inclusive.",
        },
    ];

    const toggleBlog = (id) => {
        setOpenBlog(openBlog === id ? null : id);
    };

    const toggleLike = (id) => {
        setLikes((prev) => ({
            ...prev,
            [id]: { liked: !prev[id]?.liked, count: (prev[id]?.count || 0) + (prev[id]?.liked ? -1 : 1) },
        }));
    };

    const addComment = (id) => {
        if (!commentText[id]) return;
        setComments((prev) => ({
            ...prev,
            [id]: [...(prev[id] || []), commentText[id]],
        }));
        setCommentText((prev) => ({ ...prev, [id]: "" }));
    };

    return (
        <div className="min-h-screen bg-sky-50 text-gray-800 pt-8 pb-28 px-6">

            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-sky-800 mb-2">All Blogs</h1>
                <p className="text-gray-600">
                    Read the latest posts, ideas, and thoughts from our creators.
                </p>
            </div>


            <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition duration-300 border border-sky-100 hover:-translate-y-1"
                    >
                        <h2 className="text-xl font-semibold text-sky-800 mb-2">
                            {blog.title}
                        </h2>
                        <p className="text-gray-600 text-sm mb-2">
                            By <span className="font-medium">{blog.author}</span> • {blog.date}
                        </p>
                        <p className="text-gray-700 mb-4">{blog.excerpt}</p>

                        <button
                            onClick={() => toggleBlog(blog.id)}
                            className="text-sky-700 font-medium hover:text-sky-900 transition"
                        >
                            {openBlog === blog.id ? "Close" : "Read More →"}
                        </button>


                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openBlog === blog.id ? "max-h-[400px] mt-4" : "max-h-0"
                                }`}
                        >
                            <p className="text-gray-700 leading-relaxed border-t border-sky-100 pt-4 mb-4">
                                {blog.content}
                            </p>


                            <div className="flex items-center justify-between border-t border-sky-100 pt-3">
                                <button
                                    onClick={() => toggleLike(blog.id)}
                                    className={`flex items-center space-x-2 transition transform hover:scale-105 ${likes[blog.id]?.liked ? "text-red-500" : "text-gray-500 hover:text-red-400"
                                        }`}
                                >
                                    <Heart
                                        size={20}
                                        fill={likes[blog.id]?.liked ? "red" : "none"}
                                        className="transition"
                                    />
                                    <span>{likes[blog.id]?.count || 0}</span>
                                </button>

                                <button
                                    onClick={() => toggleBlog(blog.id + "-comment")}
                                    className="flex items-center space-x-2 text-gray-500 hover:text-sky-600 transition transform hover:scale-105"
                                >
                                    <MessageCircle size={20} />
                                    <span>{(comments[blog.id] || []).length}</span>
                                </button>
                            </div>


                            {openBlog === blog.id + "-comment" && (
                                <div className="mt-4 border-t border-sky-100 pt-4 animate-fadeIn">
                                    <div className="space-y-2 mb-3 max-h-32 overflow-y-auto">
                                        {(comments[blog.id] || []).map((cmt, index) => (
                                            <p key={index} className="bg-sky-100 p-2 rounded-md text-gray-700 text-sm">
                                                {cmt}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            placeholder="Write a comment..."
                                            value={commentText[blog.id] || ""}
                                            onChange={(e) =>
                                                setCommentText((prev) => ({ ...prev, [blog.id]: e.target.value }))
                                            }
                                            className="flex-1 border border-sky-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sky-300 outline-none"
                                        />
                                        <button
                                            onClick={() => addComment(blog.id)}
                                            className="bg-sky-700 text-white px-3 py-2 rounded-lg text-sm hover:bg-sky-800 transition"
                                        >
                                            Post
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>


            <div className="fixed bottom-20 right-6">
                <Link
                    to="/new"
                    className="bg-sky-700 text-white px-5 py-3 rounded-full shadow-md hover:bg-sky-800 transition font-medium"
                >
                    + New Blog
                </Link>
            </div>
        </div>
    );
};

export default AllBlogs;
