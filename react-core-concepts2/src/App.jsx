import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Component/Counter'
import Team from './Component/Team/Team'
import Users from './Component/Users/Users'
import Friends from './Component/Friends/Friends'

function App() {
  const [count, setCount] = useState(0)
  // add btn
 const handleClick=()=>{
  alert('btn clicked')
 }

{/* motamoti jhamelar ata */}
 const addToFive=(num)=>{
       alert(num+5)
 }
  return (
    <>
      <h3>React core concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
     <Counter></Counter>


    <p>Tehy are my buttons</p>
      {/* add btn */}
      <button onClick={handleClick} >Click Me</button>
      {/* add btn at a time */}
       <button onClick={()=>{alert('btn clicked againg')}}>third</button>
       
       {/* motamoti jhamelar ata */}
       <button onClick={()=>{addToFive(3)}}>Four</button>
    </>
  )
}

export default App
