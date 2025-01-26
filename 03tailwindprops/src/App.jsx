import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let userName = "Chai Aur Code"
  let anotherUserName = "Hitesh"
  let randomText1 = "The sun rises brightly, casting golden hues across the sky. Birds chirp melodiously, signaling a new day of promise."
  let randomText2 = "Technology evolves rapidly, shaping lives globally. Innovation drives progress, while challenges persist, reminding us to balance ambition with responsibility."

  return (
    <>
      <h1 className='bg-green-400 text-black rounded mb-10'>Tailwind test</h1>

    <Card userName={userName} randomText={randomText1} />  
    <Card userName={anotherUserName} randomText={randomText2} />  
    </>
  )
}

export default App
