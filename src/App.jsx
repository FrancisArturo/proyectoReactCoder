import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from './components/ContenedorItem/ItemDetailContainer';
import ItemListContainer from './components/ContenedorProd/ItemListContainer'
import ResponsiveAppBar from './components/Navbar/Navbar';
import db from '../db/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import  CartProvider  from './contexts/CartContext';
import Checkout from './components/Checkout/Checkout';
import PedidoRegistrado from './components/PedidoRegistrado/PedidoRegistrado';
import CheckoutProvider from './contexts/CheckoutContext';
import MisPedidos from './components/MisPedidos/MisPedidos';



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
      <CartProvider>
      <CheckoutProvider>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<ItemListContainer productos={productos} />} />
        <Route path="/item/:id" element={<ItemDetailContainer productos={productos} />} />
        <Route path="/categories/:id" element= {<ItemListContainer productos={productos} />} /> 
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/finish" element={<PedidoRegistrado />}/>
        <Route path="/Pedidos" element={<MisPedidos />}/>
        <Route path="/404" element={<h1>Lo sentimos, el producto no existe!</h1>} />
      </Routes>
      </CheckoutProvider>
      </CartProvider>
    </div>
    
  )
}

export default App
