import { useNavigate } from "react-router-dom";
import { usePostContext } from "./PostContext";
import styles from "../styles/home.module.css";
function Home() {
  const { posts } = usePostContext();
  const nav = useNavigate();
  return (
    <>
      <button onClick={() => nav("/create")}>Create Post</button>
      {posts.map((post) => (
        // <div key={post.id}>
        //     <p onClick={()=>nav(`edit/${post.id}`)}>{post.title}</p>
        //     <p>{post.content}</p>
        // </div>
        <div key={post.id} className={styles.card}>
          <div className={styles.head}>{post.title}</div>
          <div className={styles.content}>
            {post.content.length > 100
              ? post.content.substring(0, 100) + "..."
              : post.content}
            <br />
            <button
              onClick={() => nav(`edit/${post.id}`)}
              className={styles.button}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;
