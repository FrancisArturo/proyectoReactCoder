import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";



const ItemQuantitySelector = ({item, setCart}) => {

    const Sumar = async () => {
        
        const docRef = doc(db, "cart", item.id);
        await updateDoc(docRef, {
            producto: {
                ...item.producto,
                quantity: item.producto.quantity + 1
            }
            
        })  
        const CartCollectionRef = collection(db, 'cart')
        const cartCollection = await getDocs(CartCollectionRef);
        setCart(
            cartCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
        );    
    }



    const Restar = async () => {
        if (item.producto.quantity > 1) {

            const docRef = doc(db, "cart", item.id);
            await updateDoc(docRef, {
                producto: {
                    ...item.producto,
                    quantity: item.producto.quantity - 1
                }
                
            })  
            const CartCollectionRef = collection(db, 'cart')
            const cartCollection = await getDocs(CartCollectionRef);
            setCart(
                cartCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
            ); 
        }       
    }




    return (
        <div className="containerCantidad">
            <svg id="menos" className="signo" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinejoin="round" display="block" onClick={Restar}><path d="M20 12H4"></path></svg>
            <input id="inputCantidad" className= "input-cantidad text-center" type="number" value={item.producto.quantity}  readOnly/>
            <svg id="mas" className="signo" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinejoin="round" display="block" onClick={Sumar}><path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"></path></svg>
        </div>
    )
}

export default ItemQuantitySelector