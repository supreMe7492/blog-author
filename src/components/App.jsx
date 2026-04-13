import "../styles/App.css"
import { useEffect,useState } from "react"
import { useNavigate,Outlet } from "react-router-dom"
import { getPosts } from "./services/BlogPost"
function App() {
  const [posts,setPosts] = useState([]);
  const [initialized,setInitialized] = useState(false)
  const navigate = useNavigate();
  useEffect(  ()=>{
    if(initialized)
      return;
        async function fetchPost() {
         try{ 
          const authorPosts = await getPosts();
          setPosts(authorPosts);
          setInitialized(true);
        }catch(err){
            navigate('/login')
        }
          
        }
        fetchPost();
  },[initialized, navigate])

  return (
    <>
    <Outlet context={{posts,setPosts}}/>
    </>
  )
}

export default App
