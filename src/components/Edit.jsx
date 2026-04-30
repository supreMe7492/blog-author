import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { editPost } from "./services/BlogPost";
import { usePostContext } from "./PostContext";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="content"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Make changes</button>
    </form>
  );
}

export default EditForm;
