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
import Protected from './routes/Protected'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter >
        <Navbar/>
        {isLoggedIn ? 
        <button className="nav-link" onClick={()=> setIsLoggedIn(!isLoggedIn) }>Logout</button> :
        <button className="nav-link" onClick={()=> setIsLoggedIn(!isLoggedIn) }>Login</button>}
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blogs />} />

         
          <Route path='/blog/:title' element={<Protected isLoggedIn={isLoggedIn}>
            <Blog />
          </Protected>} />
            

          <Route path='/contact' element={<Contact />} />
          <Route path='/user' element={<User />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
