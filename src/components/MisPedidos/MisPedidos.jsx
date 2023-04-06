import React, { useContext, useEffect, useState } from 'react'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import Order from '../Order/Order'

const MisPedidos = () => {
    const {orders, getOrders} = useContext(CheckoutContext)
    const [order, setOrder] = useState([])
    const [idPedido, setIdPedido] = useState("")
    const [mostrarPedido, setMostrarPedido] = useState(false)
    const [errorInputVacio, setErrorInputVacio] = useState(false)
    const [errorIdNoEncontrado, setErrorIdNoEncontrado] = useState(false)

    useEffect(() => {
        getOrders()
    }, [])

    const handleIdPedido = (e) => {
        setIdPedido(e.target.value)
    }

    
    const getOrder = async () => {
        const order = await orders.find(order => order.id == idPedido)
        if (order) {
            setOrder(order)
            setErrorIdNoEncontrado(false)
        } else {
            setErrorIdNoEncontrado(true)
            setMostrarPedido(false)
        }
    }
    
    const handleOrder = (e) => {
        setMostrarPedido(false)
        if (idPedido == "") {
            e.preventDefault()
            setErrorInputVacio(true)
            setErrorIdNoEncontrado(false)
        } else {
            getOrder()
            setErrorInputVacio(false)
            setMostrarPedido(true)
        }
    }




    
return (
    <div className='misPedidosContainer'>
        <div className='containerInputPedidos'>
            <h3 id="tituloMisPedidos">Mis Pedidos</h3>
            <div className='inputMisPedidos'>
                <input type="text" placeholder='Ingresa el id de tu pedido' onChange={handleIdPedido} />
                <button onClick={handleOrder} className='botonMisPedidos'>Ingresar</button>
            </div>
                <span className={errorInputVacio? "errorTrue" : "errorFalse"}>Ingrese un id para ver el detalle</span>
                <span className={errorIdNoEncontrado? "errorTrue" : "errorFalse"}>No se puede encontrar el id ingresado</span>
        </div>
        <div>
        </div>
        <div className={!mostrarPedido? "mostrarDetalleMisPedidosFalse" : ""}>
            <div className="pedido">
                <div>
                    <h5>Detalle del pedido</h5>
                </div>
                <div>
                    <p>Id del pedido: {order.id}</p>
                </div>
                <div>
                    <p>Fecha: {order.date}</p>
                </div>
                <div>
                    {order.items && order.items.map((item) => <Order item={item} key={item.id}/>)
                    }
                </div>
            </div>
            <div className="totalDetailMisPedidos">
                <div className="priceDetail">
                    <div className="containerPriceDetail">
                        <p>Subtotal</p>
                        <p>${order.subtotal}</p>
                    </div>
                    <div className="containerPriceDetail">
                        <p>Envío</p>
                        <p>{order.envio} </p>
                    </div>
                </div>
                <div className="containerPriceDetail">
                    <p>Total</p>
                    <p>{order.total} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MisPedidos