import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import db from "../../db/firebase-config";
import { CartContext } from "./CartContext";

export const CheckoutContext = createContext();

const CheckoutProvider = ({children}) => {
    const {cart, subtotal, setCart} = useContext(CartContext);
    const [order, setOrder] = useState({});
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [emailRepetido, setEmailRepetido] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorApellido, setErrorApellido] = useState(false);
    const [errorTelefono, setErrorTelefono] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorEmailRepetido, setErrorEmailRepetido] = useState(false);
    const orderCollectionRef = collection(db, 'orders')
    const envio = 40;
  

    const fecha = new Date().toLocaleString();

    const createOrder = () => {
        const newOrder = {
            nombre : nombre,
            apellido : apellido,
            telefono : telefono,
            email : email,
            items: cart,
            date : fecha,
            total: subtotal + envio,
        };
        setOrder(
            addDoc(orderCollectionRef, newOrder)
        );
        setDate (fecha);
        vaciarCarrito();
    };

    const vaciarCarrito = () => {
        cart.map((item) => {
            const docRef = doc(db, 'cart', item.id)
            deleteDoc(docRef)
        })
        setCart([]);
    }







  return (
    <CheckoutContext.Provider  
        value={{
            envio,
            order,
            setOrder,
            date,
            setDate,
            email,
            setEmail,
            emailRepetido,
            setEmailRepetido,
            nombre,
            setNombre,
            apellido,
            setApellido,
            telefono,
            setTelefono,
            errorNombre,
            setErrorNombre,
            errorApellido,
            setErrorApellido,
            errorTelefono,
            setErrorTelefono,
            errorEmail,
            setErrorEmail,
            errorEmailRepetido,
            setErrorEmailRepetido,
            createOrder,
            vaciarCarrito,
        }}
    >
        {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutProvider 