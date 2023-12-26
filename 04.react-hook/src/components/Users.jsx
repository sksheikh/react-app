import React, { useRef } from 'react'

export default function Users() {
  const userNameRef = useRef();
  const userPasswordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userNameRef.current.value);
    userNameRef.current.style.color = 'red';
  }
  return (
    <div>
      <h1>Users</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" 
          placeholder='Enter user name'
          ref={userNameRef}/>
        <input type="text" 
          placeholder='Enter Password'
          ref={userPasswordRef}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
