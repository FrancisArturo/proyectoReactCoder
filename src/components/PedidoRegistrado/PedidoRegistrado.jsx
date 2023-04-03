
import React, { useContext, useEffect, useState } from 'react'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../../db/firebase-config'


const PedidoRegistrado = () => {
    const {date, } = useContext(CheckoutContext)
    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState([])
    const [id, setId] = useState('')
    const ordersCollectionRef = collection(db, 'orders')

    const getOrders = async () => {
        const ordersCollection = await getDocs(ordersCollectionRef)
        setOrders(ordersCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
        )
    }

    const getOrder = async () => {
        setOrder(orders.find((order) => order.date === date))
    }

    const getId = async () => {
        setId(order.id)
    }

    useEffect(() => {
        getOrders()
    }, [])

    useEffect(() => {
        getOrder()
    }, [orders])

    useEffect(() => {
        getId()
    }, [order])


  return (
    <div>
        <h1>Pedido Registrado</h1>
        <h2>Gracias por tu compra</h2>
        <h3>El id de tu pedido es: {id} </h3>
    </div>
  )
}

export default PedidoRegistrado