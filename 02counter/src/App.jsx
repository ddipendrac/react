import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15) // counter: var, setCounter function responsible to handel counter, useState(default value)
  // let counter = 5

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)

      // HOW TO INCREASE BY 3 IN 1 Click???? Interview ????
      // setCounter(prevCounter => preVcounter + 1)
      // setCounter(prevCounter => preVcounter + 1) 
      // setCounter(prevCounter => preVcounter + 1)
    }
    
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
