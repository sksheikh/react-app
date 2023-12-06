import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card';
// import './App.css'

const title = 'Card Title';
const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas?';
const date = new Date().getFullYear();

function App() {

  return (
    <>
      <div>
        <h1 className='headingStyle'>React App</h1>
        <Card titleText="Card Title" 
          descText="card description should be here"/>
      </div>

    </>
  )
}

export default App
