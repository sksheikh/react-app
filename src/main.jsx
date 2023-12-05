import React from 'react'
import ReactDOM from 'react-dom/client'

// const headingStyle ={
//   backgroundColor: 'purple',
//   color:'#fff',
//   padding: '5px 10px',
//   textAlign: 'center',
// }

const title = 'Hello React';
const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas?';
const date = new Date().getFullYear();
ReactDOM.createRoot(document.getElementById('root')).render(
 <div>
    <h1 className='headingStyle'>{title}</h1>
    <p>{description}</p>
    <p>{date}</p>
 </div>
)
