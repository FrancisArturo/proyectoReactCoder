import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import StyledBadge from '@mui/material/Badge';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


const  OffCanvasExample = ({ name, ...props }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <IconButton aria-label="cart" onClick={handleShow}>
            <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
            <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Tu Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
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
