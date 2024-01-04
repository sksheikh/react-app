import React from 'react'
import User from './user'

export default function Users({users,handleRemoveUser}) {
  
  return (
    <section className='users'>
      {users.map((user) => <User key={user.id} user={user}
        handleRemoveUser={handleRemoveUser} /> )}
      
    </section>
  )
}

