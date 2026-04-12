import { useOutletContext,useNavigate } from "react-router-dom";

function Home() {
    const {posts} = useOutletContext();
    const nav = useNavigate();
    return(
        <>
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