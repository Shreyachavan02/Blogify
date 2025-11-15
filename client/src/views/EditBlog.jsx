import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fetch existing blog info
  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:5000/api/blogs/${id}`, {
      title,
      content,
    });

    alert("Blog Updated Successfully!");
    navigate("/"); // go back home
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Edit Blog</h2>

      <form style={styles.form} onSubmit={handleUpdate}>
        <input
          style={styles.input}
          type="text"
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button style={styles.button} type="submit">
          Update Blog
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "12px",
    height: "180px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    resize: "none",
  },
  button: {
    padding: "12px",
    background: "#6c63ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default EditBlog;
