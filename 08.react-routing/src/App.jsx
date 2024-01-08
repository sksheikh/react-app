import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Blog from './pages/Blog'
import User from './pages/User'

function App() {

  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/blog/:title' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user' element={<User />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
