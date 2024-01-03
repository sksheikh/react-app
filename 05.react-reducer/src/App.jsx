import { useState } from 'react'

import UseReducer from './Components/Hooks/UseReducer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UseReducer />
    </>
  )
}

export default App
