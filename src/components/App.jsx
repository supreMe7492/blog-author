import "../styles/App.css"
import { useEffect,useState } from "react"
import { useNavigate,Outlet } from "react-router-dom"
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
  },[navigate])

console.log(posts)
  return (
    <>
    <Outlet context={{posts,setPosts}}/>
    </>
  )
}

export default App
