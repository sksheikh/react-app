import Card from './Card'
import data from './data.json'
import { v4 as uuidv4 } from 'uuid';
// import './App.css'


function App() {

  const users = [
    { 
      'fullName': 'Sheikh Salah Uddin',
      'age': 28,
      'phones': [
        { 'home': '017888', 'office': '018777'}
      ]
    },
    { 
      'fullName': 'Sheikh Salah Uddin',
      'age': 28,
      'phones': [
        { 'home': '017111', 'office': '018555'}
      ]
    }
  ]
  return (
    <>
      <div>
        <h1 className='headingStyle'>React App</h1>
       { users.map((user,index) => <article key={index}>
          <p><b>Full Name:</b> {user.fullName}</p>
          <p><b>Age:</b> {user.age}</p>
          <p><b>Phones:</b>
            {user.phones.map((phone,index) => <p key={index}>
              <b>Home:</b> {phone.home} <br />
              <b>Office:</b> {phone.office}</p>
              )}
           </p>

          </article>)
        }
      </div>

    </>
  )
}

export default App
