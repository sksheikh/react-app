import { useContext, useState } from 'react'
// import './App.css'
import Users from './components/Users'
import AddNew from './components/AddNew';
import UserProvider from './hook/userProvider';


function App() {
  return (
    <>
      <UserProvider>
        {/* <AddNew /> */}
        <Users />
      </UserProvider>
      
    </>
  )
}

export default App
