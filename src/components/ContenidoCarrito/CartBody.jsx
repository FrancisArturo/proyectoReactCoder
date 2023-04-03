import React, { useContext} from 'react'
import ItemQuantitySelector from '../ContenedorSelector/ItemQuantitySelector'
import { CartContext } from '../../contexts/CartContext'


const CartBody = () => {

    const {cart, cantidad, setCart, deleteItem} = useContext(CartContext)

    if (cantidad === 0) {
        return (
            <h6>No hay productos en el carrito!</h6>
        )
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
                            <ItemQuantitySelector item={item} setCart={setCart} cart={cart} />
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