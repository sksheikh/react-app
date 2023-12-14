import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() =>{
    console.log('useEffect');
  },[count]);
  
  const handleCount = () => {
    console.log('useState');
    setCount(count + 1);
  }

  return (
    <>
      <h1>useEffect</h1>
      <p>Count: {count}</p>
      <button onClick={handleCount}>+</button>
    </>
  )
}

export default App
