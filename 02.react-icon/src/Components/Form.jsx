import React, { useState } from 'react'
import '../App.css'

export default function Form(props) {

  const data = 'From child component';
  props.onChildData(data);

  const [user, setUser] = useState({name: "", email: ""});
  const {name,email} = user;
  const handleChange = (e) => {
    setUser({...user,[e.target.name]: e.target.value})
    // console.log(e.target.name)
  }

  // const {name,email} = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(user);
  }

  return (
    <div>
      <h1 className="textCenter">Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name='name'
            value={name}
            onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name='email'
            value={email}
            onChange={handleChange} />
        </div>

        <div>
          <button className='mt-2' type='submit'>Register</button>
        </div>
      </form>
      
    </div>
  )
}

