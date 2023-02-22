import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Button } from './components/Button/Button';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Button textButton="Hola"/>
    </div>
  )
}

export default App
