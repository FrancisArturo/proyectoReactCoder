import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import db from '../../../db/firebase-config';





  function AddItemButton1({ producto, name, ...props}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cartCollectionRef = collection(db, 'cart');
    
    const AddItemCart = async (item) => {
      await addDoc(cartCollectionRef, item);
    }

  


    return (
      <>
        <button className="botonAgregar" onClick = {() => {handleShow(); AddItemCart({producto});}} >Agregar Al Carrito</button>
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
    );
  }

  export default AddItemButton1