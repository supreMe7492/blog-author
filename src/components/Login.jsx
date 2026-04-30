import { useState} from "react";
import {logUser} from './services/Auth'
import { useNavigate } from "react-router-dom";
import '../styles/login.css'
function LoginForm(){
    const [name, setName] = useState('');
    const [password,setPassword] = useState('');
    const nav = useNavigate();

   async function handleSubmit(e){
    e.preventDefault();
    const data = {name,password}
    await logUser(data);
    nav('/'); // Redirect to home page after successful login
  }

   return <div className="container">
    <div className="card">

  <span className="card__title">Login</span>
  <form className="card__form" onSubmit={handleSubmit}>
    <input placeholder="Your username" type="text" required="" onChange={(e)=>{setName(e.target.value)}} />
    <input placeholder="Your password" type="password" required="" onChange={(e)=>{setPassword(e.target.value)}} />
    <button className="sign-in">Sign in</button>
  </form>
</div>
</div>

}

export default LoginForm