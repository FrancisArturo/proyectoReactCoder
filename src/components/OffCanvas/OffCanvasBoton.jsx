import React, { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartBody from '../ContenidoCarrito/CartBody';
import { CartContext } from '../../contexts/CartContext';






  function OffCanvasBoton({ producto, name, ...props}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {AddItemCart, total} = useContext(CartContext)
    
  

    return (
      <>
        <button className="botonAgregar" onClick = {() => {handleShow(); AddItemCart({producto});}} >Agregar Al Carrito</button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Tu Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <CartBody />
          </Offcanvas.Body>
          <div className='px-2 md:px4 mt-5'>
            <div className='subtotal d-flex justify-content-between'>
                <div>Total</div>
                <div>${total} </div>
            </div>
            <div className='mt-3 w-100'>
                <a href="#">
                <button className='h-auto border border-dark rounded text-dark w-100 p-2'>Checkout</button>
                </a>
            </div>
          </div>
        </Offcanvas>
      </>
    );
  }

  export default OffCanvasBoton;