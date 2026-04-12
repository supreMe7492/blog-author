import "../styles/App.css"
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import { getPosts } from "./services/BlogPost"
function App() {
  const [posts,setPosts] = useState(null);
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
  },[])

console.log(posts)
  return (
    <>
    <h1>helo</h1>
    </>
  )
}

export default App
