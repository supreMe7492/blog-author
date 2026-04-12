import "../styles/App.css"
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import { getPosts } from "./services/BlogPost"
function App() {
  const [posts,setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(  ()=>{
        async function fetchPost() {
         try{ const authorPosts = await getPosts();
          setPosts(authorPosts)
        }catch(err){
            navigate('/login')
        }
          
        }
        fetchPost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

console.log(posts)
  return (
    <>
     {posts.map(post=>(
        <div key={post.id} id = {post.id}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
     ))}
    </>
  )
}

export default App
