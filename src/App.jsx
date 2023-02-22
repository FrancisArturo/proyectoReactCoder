import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Button  from './components/Button/ItemListContainer';


function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='container'>
      <Navbar />
      <h1>Tienda de Galletas </h1>
      <Button greeting="Saludo" />
    </div>
  )
}

export default App
