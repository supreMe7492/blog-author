import "../styles/App.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import PostProvider from "./PostContext";
import Home from "./Home";
import CreateForm from "./CreatePost";
import EditForm from "./Edit";
import LoginForm from "./Login";
import SignUpForm from "./Signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/create" element={<CreateForm />} />
        <Route path="/edit/:postId" element={<EditForm />} />
      </Route>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
}

function AppLayout() {
  return (
    <PostProvider>
      <Outlet />
    </PostProvider>
  );
}

export default App;
