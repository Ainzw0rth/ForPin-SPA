import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/homepage/Home.tsx'
import Login from './pages/login/Login.tsx'
import Search from './pages/search/Search.tsx'
import Request from './pages/request/Request.tsx'
import Following from './pages/following/Following.tsx'
import Postpage from './pages/postpage/Postpage.tsx'
import PrivateRoutes from './utils/PrivateRoute.tsx'
import './index.css'
  
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/postpage" element={<Postpage />}></Route>
          <Route path="/request" element={<Request />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/following" element={<Following />}></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
