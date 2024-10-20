import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Card2 from './Components/Card2'

function App() {

  const [count, setCount] = useState(0)
  let myobj = {
    username:"Rahul singh",
    roll:25
  }
  let arr = [2,4,5,7];

  return (
    <>
    <Card username="Chai AUr Code" someobj={myobj} somearr={arr}/>
    <Card username="Rahul Singh" someobj={myobj} somearr={arr}/>
    {/* <Card username="Chai AUr Code" someobj={myobj} somearr={arr}/> */}
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card2/>
    </>
  )
}

export default App
