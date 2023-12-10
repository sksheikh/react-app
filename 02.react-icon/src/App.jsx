import React from 'react'

export default function App() {
  const handleParentClick = (event) => {
    console.log('Parent event:', event);
  }

  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log('Child event:',event);
  }
  return (
    <div onClick={handleParentClick}>
      <h1>Welcome React</h1>
      <button onClick={handleChildClick}>Click here</button>
    </div>
  )
}

