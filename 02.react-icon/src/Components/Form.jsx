import React, { useState } from 'react'
import '../App.css'

export default function Form() {

  const inputData = {
    name: '',
    email: ''
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      name,
      email
    }
    console.log(inputData);
  }

  return (
    <div>
      <h1 className="textCenter">Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name='name'
            value={name}
            onChange={handleNameChange} />
        </div>

        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name='email'
            value={email} 
            onChange={handleEmailChange} />
        </div>

        <div>
          <button className='mt-2' type='submit'>Register</button>
        </div>
      </form>
      
    </div>
  )
}

