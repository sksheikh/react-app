import React, {useState} from 'react'
import Component2 from './Component2'

import { UserContext } from './userContext'

export default function Component1() {
  const [user, setUser] = useState({id:1, name: 'sheikh'})
  const [text, setText] = useState('hello dear');
  return (
    <div>
      <UserContext.Provider value={{user,text}}>
        <Component2 />
      </UserContext.Provider>
    </div>
  )
}
