import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from '../../../db/firebase-config'
import ItemQuantitySelector from '../ContenedorSelector/ItemQuantitySelector'

const CartBody = () => {
    const [cart, setCart] = useState([])
    const CartCollectionRef = collection(db, 'cart')

    const getCart = async () => {
        const cartCollection = await getDocs(CartCollectionRef);
        setCart(
            cartCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
        );
    }

    useEffect(() => {
        getCart()
    }, [])

    const deleteItem = async (id) => {
        const docRef = doc(db, 'cart', id)
        await deleteDoc(docRef)
        getCart()
    }
    return (
            <div className='containerCart'>{cart.map((item)=> (
                <div className='cartBody' key={item.id}>
                    <div className='imgBody'>
                        <img src={item.producto.image} alt="imagen producto"/>
                    </div>
                    <div className='descriptionBody'>
                        <h6>{item.producto.title}</h6>
                        <div className='d-flex align-items-center'>
                            <ItemQuantitySelector item={item} setCart={setCart} />
                        </div>
                    </div>
                    <div className='priceBody'>
                        <span>${item.producto.price * item.producto.quantity}</span>
                        <div>&nbsp;</div>
                        <div className='d-flex justify-end'>
                            <div className='botonEliminar' onClick={()=>deleteItem(item.id)}>Eliminar</div>
                        </div>
                    </div>
                </div>
            ))} 
            </div>
    )
}

export default CartBody