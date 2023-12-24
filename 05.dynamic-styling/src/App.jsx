import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [error, setError] = useState(true);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  useEffect(() => {
    if(name.length > 4) {
      setError(false)
    }else[
      setError(true)
    ]
  },[name])

  return (
    <>
     <input type="text"
      className={error ? 'invalid' : 'valid'}
      // style={{
      //   backgroundColor: error ? 'red' : 'green',
      //   color: '#fff'
      // }}
      value={name}
      onChange={handleChange} />
    </>
  )
}

export default App
