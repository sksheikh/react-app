import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodo] = useState(null)

  
    useEffect(() =>{
          fetch('https://jsonplaceholder.typicode.com/todos')
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            setTodo(data)
          })
      },[]);

  // const handleCount = () => {
  //   console.log('useState');
  //   setCount(count + 1);
  // }

  return (
    <>
      <h1>Todos</h1>
      { todos && todos.map((todo) =>
      <p key={todo.id}>{todo.title}</p>)
      }
      
    </>
  )
}

export default App
