import React, { useState } from 'react'

export default function NewTodo({onNewTodos}) {

  const [todo, setTodo] = useState('')

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewTodos(todo);
    setTodo('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new_todo">New Todo: </label>
        <input type="text" name='new_todo' 
          id='new_todo'
          value={todo}
          onChange={handleChange} />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

