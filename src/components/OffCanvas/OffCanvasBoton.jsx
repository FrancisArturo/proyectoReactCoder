import React, { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartBody from '../ContenidoCarrito/CartBody';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';






  function OffCanvasBoton({ producto, name, ...props}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {AddItemCart, subtotal, cantidad} = useContext(CartContext)
    
  

    return (
      <>
        <button className="botonAgregar" onClick = {() => {handleShow(); AddItemCart({producto});}} >Agregar Al Carrito</button>
        <Offcanvas show={show} onHide={handleClose} {...props} className="py-4 px-2 containerCarrito">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Tu Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <CartBody />
          </Offcanvas.Body>
          <div className='px-2 md:px4 mt-5'>
            <div className='subtotal d-flex justify-content-between'>
                <div>SubTotal</div>
                <div>${subtotal} </div>
            </div>
            <Link to={`/checkout`}>
            <div className='mt-3 w-100'>
              <div className='mt-3 w-100'>
                <button className='h-auto border border-dark rounded text-light w-100 p-2 btnCheckout' onClick={handleClose} disabled={cantidad === 0}>Checkout</button>
              </div>
            </div>
            </Link> 
          </div>
        </Offcanvas>
      </>
    );
  }

  export default OffCanvasBoton;