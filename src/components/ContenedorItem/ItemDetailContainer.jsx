
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../db/firebase-config";
import AddItemButton from "../ButtonAgregar/AddItemButton";
import { CartContext } from "../../contexts/CartContext";



const ItemDetailContainer = () => {
    const {id} = useParams();
    const [producto, setProducto] =  useState({});
    const navigate = useNavigate();
    


    const getProducto = async (id) => {
        const docRef = doc(db, "items", id);
        
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setProducto(docSnap.data());
        } else {
            navigate('/404');
        }
    }
    
    useEffect(() => {
      getProducto(id)
      
    }, [id])
    

  return (
    <div className="containerItem">
        <img src={producto.image} alt={producto.title} className="imagenProducto"/>
          <div>
            <div className="descripcion">
              <h4>{producto.title} </h4>
              <span>${producto.price}</span>
            </div>
            <div className="containerInformacion">
              <p>{producto.description} </p>
            </div> 
              <AddItemButton producto={producto} />
          </div>
    </div>
  )
}

export default ItemDetailContainer