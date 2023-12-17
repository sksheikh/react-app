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
<<<<<<< HEAD
    <div>
      <STATE_HOOK />
=======
    <div >
      <NewTodo onNewTodos={handleNewTodo}/>
      <Todos todos={newTodos}/>
>>>>>>> 1cb72e6c0f11e4cc2183c7a497fd01de1f1f64f0
    </div>
  )
}

