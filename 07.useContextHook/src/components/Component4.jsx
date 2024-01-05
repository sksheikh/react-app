import React, { useContext } from 'react'
import { UserContext } from './userContext'


export default function Component4() {
    const {user, text} = useContext(UserContext)
  return (
    <div>
        <p>{text}</p>
      <h3>{user.name}</h3>
    </div>
  )
}
