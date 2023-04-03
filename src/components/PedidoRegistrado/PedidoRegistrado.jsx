import React, { useContext, useEffect, useState } from 'react'
import { CheckoutContext } from '../../contexts/CheckoutContext'



const PedidoRegistrado = () => {
    const {date, orders} = useContext(CheckoutContext)
    const [order, setOrder] = useState([])
    const getOrder = async () => {
        setOrder(orders.find((order) => order.date === date))
    }
    useEffect(() => {
        getOrder()
    }, [orders])



    if (!order) { 
        return <h1>Cargando...</h1>
    } else {
        return (
            <div>
                <h1>Gracias por tu compra!</h1>
                <h2>Tu número de pedido es: {order.id} </h2>
            </div>
        )
    }
}

export default PedidoRegistrado