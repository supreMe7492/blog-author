import { createContext,useState,useEffect, useContext } from "react";
import { getPosts } from "./services/BlogPost";
import { useNavigate } from "react-router-dom";
const PostContext = createContext();

function PostProvider({children}){
  const [posts,setPosts] = useState([]);
  const nav = useNavigate();

     useEffect(  ()=>{
   
        async function fetchPost() {
         try{ 
          const authorPosts = await getPosts();
          setPosts(authorPosts);
        }catch(err){
          if (err.message.includes("invalid token")) {
                localStorage.removeItem("token");
                nav("/login");
               return;
    }
        }
          
        }
        fetchPost();
  },[])
return(
    <PostContext.Provider value={{posts,setPosts}}>
        {children}
    </PostContext.Provider>
)
}

export function usePostContext() {
  return useContext(PostContext);
}

export default PostProvider;