import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Error from './pages/Error'

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
