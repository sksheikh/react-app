import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste totam asperiores cupiditate sapiente temporibus libero deleniti labore sed architecto?</p>
      <button onClick={() => {
        navigate('/')
      }}>back to home</button>
    </div>
  )
}
