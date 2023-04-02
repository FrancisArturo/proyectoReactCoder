


const Order = ({item}) => {


  return (
    <div className="containerOrder">
        <div className="itemDetail">
            <div className="imgDetail">
                <img src={item.producto.image}  alt="imagen producto" />
            </div>
            <div className="titleItemDetail">
                <div>
                    <h6>{item.producto.title} </h6>
                </div>
                <div>
                    <p>Cantidad: {item.producto.quantity} </p>
                </div>
            </div>
            <div className="priceItemDetail">
                <p>${item.producto.price * item.producto.quantity}</p>
            </div>
        </div>
    </div>
  )
}

export default Order