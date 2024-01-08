import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function User() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({name: name, age: age})
    setName('');
    setAge('');
  }

  return (
    <div>
      <h2>User page</h2>
      <h4>User name: {searchParams.get('name')}</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder='name' 
          onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={age} placeholder='age' 
          onChange={(e) => setAge(e.target.value)}/>
        <button>submit</button>
      </form>
    </div>
  )
}
