import React from 'react'

export default function User({user,handleRemoveUser}) {
  const {id, name} = user;
  const handleDelete = (id) => {
    handleRemoveUser(id);
  }
  return (
    <article className='user'>
      <p>{id}</p>
      <p>{name}</p>
      <button onClick={()=> handleDelete(id)}>Delete</button>
    </article>
  )
}

