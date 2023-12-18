import React from 'react'
import STATE_HOOK from './STATE_HOOK'

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

