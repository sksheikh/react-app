import React, { useState } from 'react'

export default function STATE_HOOK() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count+1);
    setCount((count) => count+1);
    setCount((count) => count+1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
