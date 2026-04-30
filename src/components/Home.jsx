import { useNavigate } from "react-router-dom";
import { usePostContext } from "./PostContext";

function Home() {
    const {posts} = usePostContext();
    const nav = useNavigate();
    return(
        <>
        <button onClick={()=>nav('/create')}>Create Post</button>
          {posts.map(post=>(
            <div key={post.id}>
                <p onClick={()=>nav(`edit/${post.id}`)}>{post.title}</p>
                <p>{post.content}</p>
            </div>
          ))}
        </>
    )
}

export default Home;