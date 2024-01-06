import React, { useContext } from 'react'
import User from './User'
import { userContext } from '../useContext'

export default function Users() {
  const {users} = useContext(userContext);
  return (
    <section className='users'>
      {users.map((user) => <User key={user.id} user={user}
        /> )}
      
    </section>
  )
}

