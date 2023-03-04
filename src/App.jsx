import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from './components/ContenedorItem/ItemDetailContainer';
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
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<ItemListContainer productos={productos} />} />
        <Route path="/item/:id" element={<ItemDetailContainer productos={productos} />} />
        <Route path="/category/:categoryid" element= {<ItemListContainer productos={productos} />} />  
      </Routes>
    </div>
    
  )
}

export default App
