import { useState } from 'react'
import { useFormik } from 'formik';

import './App.css'

function App() {

 const formik = useFormik({
  initialValues: {
    name: '',
    email: '',
    password: '',
  },
  onSubmit: (values) => {
    console.log(values)
  }
 })

  return (
    <>
      <h1>Signup Form</h1>

      <form onSubmit={formik.handleSubmit}>
        {/* Name */}
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' id='name'
             value={formik.values.name}
            onChange={formik.handleChange} />
        </div>

         {/* Name */}
         <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name='email' id='email'
             value={formik.values.email}
            onChange={formik.handleChange} />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name='password' id='password'
              value={formik.values.password}
              onChange={formik.handleChange} />
          </div>

        {/* submit btn */}
        <div>
          <button type='submit' style={{ marginTop: '15px', backgroundColor: 'red'}}>signup</button>
        </div>
      </form>
      
    </>
  )
}

export default App
