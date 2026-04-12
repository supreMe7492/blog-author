import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App.jsx'
import { BrowserRouter,Route,Routes } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
        <Routes>
      <Route path="/" element={<App />} />
    </Routes>

  </BrowserRouter>
  </StrictMode>
)
