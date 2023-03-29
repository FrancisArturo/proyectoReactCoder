import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from './components/ContenedorItem/ItemDetailContainer';
import ItemListContainer from './components/ContenedorProd/ItemListContainer'
import ResponsiveAppBar from './components/Navbar/Navbar';
import db from '../db/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [productos, setProductos] = useState([])
  const itemsCollectionRef = collection(db, 'items')


    const getProductos = async () => {
      const itemsCollection = await getDocs(itemsCollectionRef);
      setProductos(
        itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
      );
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
        <Route path="/404" element={<h1>404: Not Found</h1>} />
      </Routes>
    </div>
    
  )
}

export default App
