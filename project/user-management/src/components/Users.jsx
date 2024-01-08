import React, { useContext } from 'react'
import User from './User'
import { userContext } from '../useContext'

export default function Users() {
  const {state} = useContext(userContext);
  console.log(state.users);
  return (
    <section className='users'>
      {state.users.map((user) => <User key={user.id} user={user}
        /> )}
      
    </section>
  )
}

