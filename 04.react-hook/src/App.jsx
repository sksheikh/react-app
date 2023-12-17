import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import useFetch from './components/useFetch'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos'

  const {data, isLoading, error} = useFetch(url);


  const loadingMessage = 'Loading...'
  const renderTodos = data && data.map((todo) =>
  <p key={todo.id}>{todo.title}</p>)

  const handleClick = () => {
    toast('added successfully')
  }

  return (
    <>
      <h1>Todos</h1>
      <button onClick={handleClick}>Click Here</button>
      <ToastContainer />
      {isLoading ?
       loadingMessage :
       renderTodos }
       {error}
      {/* {renderTodos} */}

    </>
  )
}

export default App
