import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App.jsx'
import Home from './components/Home.jsx'
import LoginForm from './components/Login.jsx'
import { BrowserRouter,Route,Routes } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
        <Routes>
         <Route path="/" element={<App />} >
           <Route index element={<Home/>}/>
         </Route>
         <Route path='/login' element={<LoginForm />} />
 
    </Routes>

  </BrowserRouter>
  </StrictMode>
)
