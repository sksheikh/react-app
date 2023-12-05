import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

const title = 'Card Title';
const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas?';
const date = new Date().getFullYear();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='headingStyle'>React App</h1>
        <div className='card'>
          <h2 className='cardTitle'>{title}</h2>
          <p className='cardDescription'>{description}</p>
          <p className='cardFooter'>{date}</p>
        </div>
      </div>

    </>
  )
}

export default App
