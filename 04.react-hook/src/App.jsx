import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './components/useFetch'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos'

  const {data, isLoading, error} = useFetch(url);


  const loadingMessage = 'Loading...'
  const renderTodos = data && data.map((todo) =>
  <p key={todo.id}>{todo.title}</p>)
  // const handleCount = () => {
  //   console.log('useState');
  //   setCount(count + 1);
  // }

  return (
    <>
      <h1>Todos</h1>
      {isLoading ?
       loadingMessage :
       renderTodos }
       {error}
      {/* {renderTodos} */}

    </>
  )
}

export default App
