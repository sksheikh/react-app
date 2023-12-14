import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodo] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const loadingMessage = 'Loading...'

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        if(!res.ok){
          throw Error('Data not found')
        }
        return res.json()
      })
      .then((data) => {
        setTodo(data)
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      })
  }, []);

  const renderTodos = todos && todos.map((todo) =>
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
