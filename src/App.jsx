/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Daisuy from './componets/Daisuy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Daisuy></Daisuy>
      <h1 className='text-xl'>Vite + React</h1>
      
    </>
  )
}

export default App
