import React, { useContext } from 'react'
import { userContext } from '../useContext';

export default function User({user}) {
  const {id, name} = user;
  const {users, setUser} = useContext(userContext);

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => {
      return user.id !== id;
    });

    setUser(filteredUsers);
  }
  return (
    <article className='user'>
      <p>{id}</p>
      <p>{name}</p>
      <button onClick={()=> handleDelete(id)}>Delete</button>
    </article>
  )
}

