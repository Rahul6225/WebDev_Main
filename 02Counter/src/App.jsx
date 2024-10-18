import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,SetCount]=useState(0);
  const AddValue=()=>{
    if(counter<20){
      counter+=1;
    }
    else{
      counter=20;
    }
    SetCount(counter);


  }
  const Subtract=()=>{
    if(counter>0){
      counter-=1;
    }
    else{
      counter=0;
    }
    SetCount(counter);
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Count value:{counter}</h2>
      <button onClick={AddValue}
      >Add Value</button>
      <br />
      <button onClick={Subtract}
      >Subtract value</button>
    </>
  )
}

export default App
