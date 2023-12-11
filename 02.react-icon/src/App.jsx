import React from 'react'
import Form from './Components/Form';

export default function App() {

  const handleChildData = (data) => {
    console.log(data)
  }
  return (
    <div >
      <Form onChildData={handleChildData} />
    </div>
  )
}

