import React, { useReducer, useState } from 'react'

const booksData = [
  {id: 1, name: "Himu Mama"},
  {id: 2, name: "Habluder Jonno Programming"},
  {id: 3, name: "OOP with PHP"}
]

const Modal = ({modalText}) => {
  return <p>{modalText}</p>
}

const reducer = (state, action) => {
  if(action.type === 'ADD'){
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      modalText: 'new book added',
      isModalOpen: true
    }
  }

  if(action.type === 'REMOVE'){
    const filteredBooks = [...state.books].filter((book) => {
      return book.id !== action.payload
    });

    return {
      ...state,
      books: filteredBooks,
      modalText: 'book removed',
      isModalOpen: true
    }
  }

  return state;
}

export default function UseReducer() {
  
  const [bookState, dispatch] = useReducer(reducer,{
    books: booksData,
    modalText: '',
    isModalOpen: false
  });
  
  
  const [bookName, setBookName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {id: new Date().getTime().toString(), name: bookName}
    dispatch({type: "ADD", payload: newBook});
    setBookName('');

  }

  const handleRemove = (id) => {
    dispatch({type: "REMOVE", payload: id});
  }

  return (
    <div>
      <h1>Book List:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={bookName} onChange={(e)=>setBookName(e.target.value)}/>
        <button type='submit'>add book</button>
      </form>

      {bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}
     {bookState.books.map((book)=> {
      const {id,name} = book;
      return <li>{name} 
        <button onClick={() => handleRemove(id)}>remove</button>
      </li>
     })}
    </div>
  )
}
