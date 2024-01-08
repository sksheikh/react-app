import React, { useContext } from 'react'
import { userContext } from '../useContext';


export default function User({user}) {
  const {id, name} = user;
  const {dispatch} =  useContext(userContext);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_USER',
      payload: id
    })
  }
  return (
    <article className='user'>
      <p>{id}</p>
      <p>{name}</p>
      <button onClick={()=> handleDelete(id)}>Delete</button>
    </article>
  )
}

