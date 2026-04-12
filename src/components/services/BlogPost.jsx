async function getPosts() {
   const data = await fetch('http://localhost:3000/author/posts',{
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':  `Bearer ${localStorage.getItem('token')}`
        }
    })
    const response = await data.json();
    if(!data.ok){
        throw new Error( response.error.message || "something wnet wrong");
       }
    return response
    
}

async function createPost(postData){
    const data  = await fetch('http://localhost:3000/author/posts',{
        method : 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':  `Bearer ${localStorage.getItem('token')}`
        },
        body : JSON.stringify(postData)
         })
        const response = await data.json();
          if(!data.ok){
        throw new Error( response.error.message || "something wnet wrong");
       }   
       return response;
}

export {getPosts,createPost}