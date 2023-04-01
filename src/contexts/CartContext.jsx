import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import React from "react";
import db from "../../db/firebase-config";
export const CartContext = createContext();






const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    const CartCollectionRef = collection(db, 'cart')
    const getCart = async () => {
    const cartCollection = await getDocs(CartCollectionRef);
    setCart(
        cartCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
    );
    }

    const SumaTotal = async () => {
    setTotal(cart.reduce((acc, item) => acc + item.producto.price * item.producto.quantity, 0))
    }
    const CantidadTotal = async () => {
    setCantidad(cart.reduce((acc, item) => acc + item.producto.quantity, 0))
    }


    useEffect(() => {
        getCart()
    }, [])
    useEffect(() => {
        SumaTotal()
    }, [cart])
    useEffect(() => {
        CantidadTotal()
    }, [cart])


    const deleteItem = async (id) => {
        const docRef = doc(db, 'cart', id)
        await deleteDoc(docRef)
        getCart()
        SumaTotal()
    }
    const AddItemCart = async (item) => {
        await addDoc(CartCollectionRef, item);
        getCart()
        SumaTotal()
    }



    return (
        <CartContext.Provider value={{
            cart, 
            getCart, 
            setCart, 
            deleteItem,
            AddItemCart, 
            SumaTotal,
            CantidadTotal,
            total,
            cantidad,
            CartCollectionRef}}
        >
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider