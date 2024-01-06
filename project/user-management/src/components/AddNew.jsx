import React, { useContext, useState } from 'react'
import { userContext } from '../useContext';

export default function AddNew() {
    const [userName, setUserName] = useState('');
    const {users, setUser} = useContext(userContext);
    const handleChange = (e) => {
        setUserName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: new Date().getTime().toString(),
            name: userName

        }
        setUser([...users,newUser]);
        setUserName('')
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={userName}/>
        <button type="submit">add new</button>
      </form>
    </div>
  )
}
