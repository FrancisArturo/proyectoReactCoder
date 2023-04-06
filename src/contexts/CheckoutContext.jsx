import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import db from "../../db/firebase-config";
import { CartContext } from "./CartContext";

export const CheckoutContext = createContext();

const CheckoutProvider = ({children}) => {
    const {cart, subtotal, setCart} = useContext(CartContext);
    const [order, setOrder] = useState({});
    const [orders, setOrders] = useState([]);
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
    const ordersCollectionRef = collection(db, 'orders')
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
            subtotal: subtotal,
            envio: envio,
            total: subtotal + envio,
        };
        setOrder(
            addDoc(ordersCollectionRef, newOrder)
        );
        setDate (fecha);
        vaciarCarrito();
        getOrders();
    };

    const vaciarCarrito = () => {
        cart.map((item) => {
            const docRef = doc(db, 'cart', item.id)
            deleteDoc(docRef)
        })
        setCart([]);
    }


    const getOrders = async () => {
        const ordersCollection = await getDocs(ordersCollectionRef)
        setOrders(ordersCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
        )
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
            getOrders,
            orders,
        }}
    >
        {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutProvider 