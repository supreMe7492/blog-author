import { useState } from "react";
import { useOutletContext,useNavigate } from "react-router-dom";
import { createPost } from "./services/BlogPost";
function CreateForm (){
    const navigate = useNavigate();
    const [title,setTilte] = useState('');
    const [content,setContent] = useState('');
    const {setPosts} = useOutletContext();
    async function handleSubmit(e){
        e.preventDefault();
        const data =await createPost({title,content});
        setPosts(prev=>[...prev,data.message]);
        navigate('/');
    }
    return(<form onSubmit={handleSubmit}> 
        <input type="text" name="title" id="title" onChange={(e)=>setTilte(e.target.value)} />
        <input type="text" name="content" id="content" onChange={(e)=>setContent(e.target.value)} />
        <button type="submit">Create post</button>
    </form>)
}

export default CreateForm