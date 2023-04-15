import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import useStore from './context/store'

function App() {

  const count = useStore((state) => state.count)
  const increment = useStore((state) => state.increment)
  const decrement = useStore((state) => state.decrement)
  const reset = useStore((state) => state.reset)

  return (
    <div className="App">
      
    </div>
  )
}

export default App
