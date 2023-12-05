import React from 'react'
import ReactDOM from 'react-dom/client'

// const headingStyle ={
//   backgroundColor: 'purple',
//   color:'#fff',
//   padding: '5px 10px',
//   textAlign: 'center',
// }

const title = 'Hello React';
const cardTitle = 'Card Title';
const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas?';
const date = new Date().getFullYear();
ReactDOM.createRoot(document.getElementById('root')).render(
 <div>
    <h1 className='headingStyle'>{title}</h1>
    <div className='card'>
      <h2 className='cardTitle'>{cardTitle}</h2>
      <p className='cardDescription'>{description}</p>
      <p className='cardFooter'>{date}</p>
    </div>
 </div>
)
