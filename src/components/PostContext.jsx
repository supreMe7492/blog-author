import { createContext,useState,useEffect, useContext } from "react";
import { getPosts } from "./services/BlogPost";
const PostContext = createContext();

function PostProvider({children}){
  const [posts,setPosts] = useState([]);

     useEffect(  ()=>{
   
        async function fetchPost() {
         try{ 
          const authorPosts = await getPosts();
          setPosts(authorPosts);
        }catch(err){
           console.log(err)
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