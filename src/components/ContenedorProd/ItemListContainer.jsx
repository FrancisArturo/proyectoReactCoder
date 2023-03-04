import { useParams } from "react-router-dom";
import Card from "../Card/Card"


const ItemListContainer = ({productos}) => {
  const {categoryid} = useParams();
  if (categoryid) {
    productos = productos.filter((producto) => producto.category == categoryid);
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
