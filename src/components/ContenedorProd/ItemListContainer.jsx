import { useParams } from "react-router-dom";
import Card from "../Card/Card"


const ItemListContainer = ({productos}) => {

  const {id} = useParams();
  if (id) {
    productos = productos.filter((producto) => producto.category == id);
  }


  return (
    <div className="ContainerProd">
      {productos.map((producto) => (
  
        <Card key={producto.id} producto={producto} />
        
      ))}
    </div>
  )
}
export default ItemListContainer
