import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import StyledBadge from '@mui/material/Badge';
import {useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartBody from '../ContenidoCarrito/CartBody';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';






const  OffCanvasExample = ({ name, ...props }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    


    const {subtotal, cantidad} = useContext(CartContext)
    



    return (
        <>
        <IconButton aria-label="cart" onClick={handleShow}>
            <StyledBadge badgeContent={cantidad} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
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
                    </div >
                        <div className='mt-3 w-100'>
                            <Link to={`/checkout`}>
                            <button className='h-auto border border-dark rounded text-light w-100 p-2 btnCheckout' onClick={() => {handleClose()}} disabled={cantidad === 0} >Checkout</button>
                            </Link>  
                        </div>
                </div>
            </Offcanvas>
        </>
    )
}

function Carrito() {
    return (
        <>
            {['end'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
        </>
    );
}


export default Carrito
