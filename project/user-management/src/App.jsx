import { useContext, useState } from 'react'
// import './App.css'
import Users from './components/Users'
import { userContext } from './useContext'
import AddNew from './components/AddNew';

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
  const [users, setUser] = useState(userData);
  return (
    <>
      <userContext.Provider value={{users, setUser}}>
        <AddNew />
        <Users />
      </userContext.Provider>
    </>
  )
}

export default App
