import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { editPost, publishPost, removePost } from "./services/BlogPost";
import { usePostContext } from "./PostContext";
import styles from "../styles/blogForm.module.css";

function EditForm() {
  const { posts, setPosts } = usePostContext();
  const { postId } = useParams();
  console.log(posts);
  const postDetails = posts.find((post) => post.id == postId);
  //console.log(postDetails);
  const [title, setTitle] = useState(postDetails?.title || "");
  const [content, setContent] = useState(postDetails?.content || "");
  const [publish, setPublish] = useState(postDetails?.published || "");
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const updtData = { title, content };
    await editPost(postId, updtData);
    setPosts((prev) =>
      prev.map((p) => (p.id == postId ? { ...p, ...updtData } : p)),
    );
    nav("/");
  }
  async function handlePublish() {
    setPublish(true);
    await publishPost(postId);
    setPosts((prev) =>
      prev.map((p) => (p.id == postId ? { ...p, published: true } : p)),
    );
  }

  async function handleDelete() {
    await removePost(postId);
    setPosts((prev) => prev.filter((p) => p.id != postId));
    nav("/");
  }
  return (
    <div className={styles.container}>
      {/* <form onSubmit={handleSubmit} className={styles.form}>
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
          Edit post
        </button>{" "}
        {publish ? (
          <p>published</p>
        ) : (
          <button onClick={handlePublish}>publish</button>
        )}
        <button onClick={handleDelete}>Delete Post</button>
      </form> */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className={styles.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit" className={styles.button}>
          Save Changes
        </button>

        {/* Publish / Status */}
        {publish ? (
          <div className={styles.publishedBadge}>Published ✓</div>
        ) : (
          <button
            type="button"
            className={styles.publishButton}
            onClick={handlePublish}
          >
            Publish
          </button>
        )}

        {/* Delete */}
        <button
          type="button"
          className={styles.deleteButton}
          onClick={handleDelete}
        >
          Delete Post
        </button>
      </form>
    </div>
  );
}

export default EditForm;
