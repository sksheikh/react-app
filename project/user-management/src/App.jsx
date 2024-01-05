import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/users'

const userData = [
  {
    id: 1,
    'name': 'Sheikh'
  },
  {
    id: 2,
    'name': 'Sazal'
  },
]
function App() {
  const [user, setUser] = useState(userData)

  const handleRemoveUser = (id) => {
    alert(id);
  }

  return (
    <>
      <Users users={user}
        handleRemoveUser={handleRemoveUser}/>
    </>
  )
}

export default App
