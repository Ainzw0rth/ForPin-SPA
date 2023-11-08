import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './pages/homepage/Home.tsx'
import Search from './pages/search/Search.tsx'
import Request from './pages/request/Request.tsx'
import Following from './pages/following/Following.tsx'
import Postpage from './pages/postpage/Postpage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Postpage />
  </React.StrictMode>,
)
