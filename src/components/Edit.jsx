import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { editPost } from "./services/BlogPost";
import { usePostContext } from "./PostContext";
import styles from "../styles/blogForm.module.css";

function EditForm() {
  const { posts, setPosts } = usePostContext();
  const { postId } = useParams();

  const postDetails = posts.find((post) => post.id == postId);
  const [title, setTitle] = useState(postDetails?.title || "");
  const [content, setContent] = useState(postDetails?.content || "");

  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const updtData = { title, content };
    await editPost(postId, updtData);
    setPosts((prev) =>
      prev.map((p) => (p.id == postId ? { id: p.id, ...updtData } : p)),
    );
    nav("/");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="title"
          id="title"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="content"
          id="content"
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

export default EditForm;
