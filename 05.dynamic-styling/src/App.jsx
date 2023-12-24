import { useEffect, useState } from 'react'
import './App.css'
import User from './components/User'

function App() {
  const [user, setUser] = useState({
    name: 'Sheikh Salah Uddin',
    age: '28'
  })
  
  return (
    <>
      <User user={user}/>
    </>
  )
}

export default App
