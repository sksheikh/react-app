import React from 'react'
import Todo from './Todo'
import { FaRegTrashCan } from "react-icons/fa6";

export default function Todos({todos}) {
  return (
    <div>
      {todos.map((todo, index) => 
        <Todo key={index} todo={todo} />)}

        <button>
          <FaRegTrashCan />
        </button>
    </div>
  )
}

