import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import React from "react";
import db from "../../db/firebase-config";
export const CartContext = createContext();






const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    const CartCollectionRef = collection(db, 'cart')

    
    const getCart = async () => {
    const cartCollection = await getDocs(CartCollectionRef);
    setCart(
        cartCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
    );
    }

    const SumaSubtotal = async () => {
    const suma = cart.reduce((acc, item) => acc + item.producto.price * item.producto.quantity, 0)
    setSubtotal(Math.round(suma))
    }
    const CantidadTotal = async () => {
    setCantidad(cart.reduce((acc, item) => acc + item.producto.quantity, 0))
    }


    useEffect(() => {
        getCart()
    }, [])
    useEffect(() => {
        SumaSubtotal()
    }, [cart])
    useEffect(() => {
        CantidadTotal()
    }, [cart])


    const deleteItem = async (id) => {
        const docRef = doc(db, 'cart', id)
        await deleteDoc(docRef)
        getCart()
        SumaSubtotal()
    }
    const AddItemCart = async (item) => {
        const itemExist = cart.find((cartItem) => cartItem.producto.title === item.producto.title)
        if(itemExist){
            const docRef = doc(db, 'cart', itemExist.id)
            await updateDoc(docRef, {
                producto: {
                    ...item.producto,
                    quantity: itemExist.producto.quantity + 1
                }
            })
            getCart()
            SumaSubtotal()
        } else {
            await addDoc(CartCollectionRef, item);
            getCart()
            SumaSubtotal() 
        }
    }



    return (
        <CartContext.Provider value={{
            cart, 
            getCart, 
            setCart, 
            deleteItem,
            AddItemCart, 
            SumaSubtotal,
            CantidadTotal,
            subtotal,
            cantidad,
            CartCollectionRef}}
        >
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider