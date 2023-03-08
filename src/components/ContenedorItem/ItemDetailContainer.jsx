import { useParams } from "react-router-dom";


const ItemDetailContainer = ({productos}) => {
    
    const{ id } = useParams();
    const producto = productos.find((producto) => producto.id == id);
    
    
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
        </div>
    </div>
  )
}

export default ItemDetailContainer