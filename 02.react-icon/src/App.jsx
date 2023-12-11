import React, { useState } from 'react'
import Todos from './Components/Todos'
import NewTodo from './Components/NewTodo';

export default function App() {
  const todos = ['todo1','todo2'];
  const [newTodos, setNewTodo] = useState(todos);

  const handleNewTodo = (newTodo) => {
    setNewTodo([...newTodos, newTodo]);
    // console.log(newTodos);
  }
  
  return (
    <div >
      <NewTodo onNewTodos={handleNewTodo}/>
      <Todos todos={newTodos}/>
    </div>
  )
}

