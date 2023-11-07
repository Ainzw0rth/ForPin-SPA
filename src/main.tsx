import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './pages/homepage/Home.tsx'
import Search from './pages/search/Search.tsx'
import Request from './pages/request/Request.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Request />
  </React.StrictMode>,
)
