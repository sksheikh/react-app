import { useFormik } from 'formik';
import * as yup from 'yup';

import './App.css'

function App() {

 const formik = useFormik({
  initialValues: {
    name: '',
    email: '',
    password: '',
  },
  validationSchema: yup.object({
    name: yup.string().min(5, 'Too Short!').required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  }),
  onSubmit: (values) => {
    console.log(values)
  }
 })

  const renderNameError = formik.touched.name && formik.errors.name && <div>
    <span style={{color: 'red'}}>{formik.errors.name}</span>
  </div>

  const renderEmailError = formik.touched.email && formik.errors.email && <div>
    <span style={{color: 'red'}}>{formik.errors.email}</span>
  </div>

  const renderPasswordError = formik.touched.password && formik.errors.password && <div>
    <span style={{color: 'red'}}>{formik.errors.password}</span>
  </div>



 const renderFormData =  <form onSubmit={formik.handleSubmit}>
    {/* Name */}
    <div>
      <label htmlFor="name">Name: </label>
      <input type="text" name='name' id='name'
          value={formik.values.name}
        onChange={formik.handleChange} />

        {/* error */}
        {renderNameError}
    </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name='email' id='email'
            value={formik.values.email}
          onChange={formik.handleChange} />

          {/* error */}
        {renderEmailError}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name='password' id='password'
          value={formik.values.password}
          onChange={formik.handleChange} />

           {/* error */}
        {renderPasswordError}
      </div>

    {/* submit btn */}
    <div>
      <button type='submit' style={{ marginTop: '15px', backgroundColor: 'red'}}>signup</button>
    </div>
  </form>

  return (
    <>
      <h1>Signup Form</h1>

     {renderFormData}
      
    </>
  )
}

export default App
