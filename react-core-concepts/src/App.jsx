import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const acotrs = ['sakip', 'khan', 'Raj', 'kazi', 'maruf']
  const singers = [
    { id: 1, name: 'Dr.Mahfzur rahman', age: 67 },
    { id: 2, name: 'Eva rahman', age: 54 },
    { id: 3, name: 'shuvro dev', age: 64 },
    { id: 4, name: 'pritom bai', age: 30 },
  ]
  const books = [
    { id: 1, name: 'Malamya' },
    { id: 2, name: 'Salvire' },
    { id: 3, name: 'Devder'  },
    { id: 4, name: 'Bali' },
  ]

  return (
    <>

      <h1>Ami + Ami</h1>
      <h3>My Book store: {books.length}</h3>
      {
        books.map(book=><BookStore
        key={book.id}
        book={book}
        ></BookStore>)
      }

      {
        singers.map(singer => <Singer
          key={singer.id}
          singer={singer}
        ></Singer>)
      }



      

      <Actor name='Bapparazz'></Actor>
      {
        acotrs.map(actor => <Actor name={actor}></Actor>)
      }
     



      <Todo task="Learn React" is_Done={true} ></Todo>
      <Todo task="explore core concepts" is_Done={false}></Todo>
      <Todo task="Try jsx" is_Done={true} ></Todo>
      {/* <Device name="laptop" price="77777"></Device>
      <Device name="mobile" price="5555"></Device>
      <Person></Person>
      <Student grade='7th' score='99' ></Student>
      <Student grade={12} score={87} ></Student>
      <Student></Student>
      <Developer></Developer> */}



    </>
  )
}

function Person() {
  const age = 25;
  const money = 3;
  return <h3>I am a person & my age is {age} an i have {money}M dollers savings</h3>
}

function Device(props) {
  console.log(props)
  return (
    <div>
      <h2>This is device:{props.name} price: {props.price} </h2>
    </div>
  )
}

// const {grade,score}={grade:'3',score:88};
function Student({ grade = 0, score = 0 }) {
  console.log(grade, score)

  return (
    <div className='student'>
      <h2>This si student data</h2>
      <h3> Study in : {grade} </h3>
      <h3> marks is: {score} </h3>
    </div>
  )
}
function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'

  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>coading: </p>
    </div>
  )
}


export default App
