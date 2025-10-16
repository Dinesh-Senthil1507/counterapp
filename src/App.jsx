import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <div className='app'>Counter App</div>   
      <div className='card'>
        <button className='button1' onClick={() => setCount((count) => count + 1)}>  (+) increase</button>
        <button className='button2'>{count}</button>
        <button className='button3'onClick={() => setCount((count) => count - 1)}> decrease (-)   </button>
      </div>
    </>
  )
}

export default App
