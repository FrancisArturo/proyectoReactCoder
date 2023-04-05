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
            <div className='containerCheckoutFinish'>
                <div className='containerPedidoFinish position-absolute top-50 start-50 translate-middle'>
                    <h3>Gracias por tu compra!</h3>
                    <h5>Tu id de pedido es: {order.id} </h5> 
                </div>

            </div>
        )
    }
}

export default PedidoRegistrado