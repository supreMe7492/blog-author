import { useNavigate } from "react-router-dom";
import { usePostContext } from "./PostContext";
import styles from "../styles/home.module.css";
function Home() {
  const { posts } = usePostContext();
  const nav = useNavigate();

  // return (
  //   <div className={styles.page}>
  //     <button onClick={() => nav("/create")} className={styles.createBtn}>
  //       + Create Post
  //     </button>

  //     <div className={styles.gridBox}>
  //       {posts.map((post) => (
  //         <div key={post.id} className={styles.card}>
  //           <div className={styles.head}>{post.title}</div>

  //           <div className={styles.content}>
  //             {post.content.length > 140
  //               ? post.content.slice(0, 140) + "..."
  //               : post.content}
  //           </div>

  //           <button
  //             onClick={() => nav(`edit/${post.id}`)}
  //             className={styles.button}
  //           >
  //             Edit
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className={styles.page}>
      {/* LEFT EMPTY SPACE */}
      <div />

      {/* CENTER CONTENT */}
      <div className={styles.main}>
        <button onClick={() => nav("/create")} className={styles.createBtn}>
          + Create Post
        </button>

        <div className={styles.gridBox}>
          {posts.map((post) => (
            <div key={post.id} className={styles.card}>
              <div className={styles.head}>{post.title}</div>

              <div className={styles.content}>
                {post.content.length > 140
                  ? post.content.slice(0, 140) + "..."
                  : post.content}
              </div>

              <button
                onClick={() => nav(`edit/${post.id}`)}
                className={styles.button}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT EMPTY SPACE */}
      <div />
    </div>
  );
}

export default Home;
