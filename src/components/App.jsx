import "../styles/App.css"
import { BrowserRouter,Route,Routes, Outlet } from "react-router-dom";
import PostProvider from "./PostContext";
import Home from "./Home";
import CreateForm from "./CreatePost";
import EditForm from "./Edit";
import LoginForm from "./Login";

function App() {
  return(
    <PostProvider>
      <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route index element={<Home/>}/>
          <Route path='/create' element = {<CreateForm/>} />
          <Route path='/edit/:postId' element = {<EditForm />} />
        </Route>
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </PostProvider>
  )
}

function AppLayout() {
  return <Outlet />;
}

export default App
