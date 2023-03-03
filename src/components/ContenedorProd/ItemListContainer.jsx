import Card from "../Card/Card"


const ItemListContainer = ({productos}) => {
  return (
    <div className="ContainerProd">
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  )
}
export default ItemListContainer
