import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "./services/BlogPost";
import { usePostContext } from "./PostContext";
import styles from "../styles/blogForm.module.css";
function CreateForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { setPosts } = usePostContext();
  async function handleSubmit(e) {
    e.preventDefault();
    const data = await createPost({ title, content });
    setPosts((prev) => [...prev, data.message]);
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter title..."
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="content"
          id="content"
          placeholder="Write your content..."
          className={styles.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit" className={styles.button}>
          Create post
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
