import { useParams } from "react-router-dom";


const ItemDetailContainer = ({productos}) => {
    
    const{ id } = useParams();
    const producto = productos.find((producto) => producto.id == id);
    
    
  return (
    <div>
        <h4>{producto.title} </h4>
        <p>{producto.description} </p>
        <p>{producto.price} </p>
        <img src={producto.image} alt={producto.title} />

    </div>
  )
}

export default ItemDetailContainer