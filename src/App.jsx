import { useEffect, useState } from 'react'
import './App.css'
import ItemListContainer from './components/ContenedorProd/ItemListContainer'
import ResponsiveAppBar from './components/Navbar/Navbar';



function App() {
  const [productos, setProductos] = useState([])

    const getProductos = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProductos(data);
      }
  useEffect (() => {
    getProductos()
  }, [])




  return (
    <div className='container'>
      <ResponsiveAppBar />
      <ItemListContainer productos={productos} />

    </div>
    
  )
}

export default App
