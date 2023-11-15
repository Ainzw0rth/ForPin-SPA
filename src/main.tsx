import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/homepage/Home.tsx'
import Search from './pages/search/Search.tsx'
import Request from './pages/request/Request.tsx'
import Following from './pages/following/Following.tsx'
import Postpage from './pages/postpage/Postpage.tsx'
import './index.css'
  
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/postpage" element={<Postpage />}></Route>
        <Route path="/request" element={<Request />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/following" element={<Following />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
