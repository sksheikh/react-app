import React from 'react'
import Todo from './Todo'

export default function Todos({todos}) {
  return (
    <div>
      {todos.map((todo, index) => 
        <Todo key={index} todo={todo} />)}
    </div>
  )
}

