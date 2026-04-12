import { useState} from "react";
import {logUser} from './services/Auth'

function LoginForm(){
    const [name, setName] = useState('');
    const [password,setPassword] = useState('');
    
   async function handleSubmit(e){
    e.preventDefault();
    const data = {name,password}
    await logUser(data);
  }

   
    return <form onSubmit={handleSubmit}>
          <input type="text" name="username" id="usrname" onChange={(e)=>{setName(e.target.value)}}/>
          <input type="password" name="password" id="pswd" onChange={(e)=>{setPassword(e.target.value)}}/>
          <button type="submit">Log-In</button>
    </form>
}

export default LoginForm