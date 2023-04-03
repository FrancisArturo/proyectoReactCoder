import { useContext } from "react";
import Order from "../Order/Order"
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { CheckoutContext } from "../../contexts/CheckoutContext";

const Checkout = () => {
  const {cart, subtotal } = useContext(CartContext);

  const {setEmail, setNombre, setApellido, setTelefono, setErrorNombre, setErrorApellido, setErrorTelefono, setErrorEmail, setErrorEmailRepetido, email, nombre, apellido, telefono, envio, errorNombre, errorApellido, errorTelefono, errorEmail, errorEmailRepetido, emailRepetido, setEmailRepetido, createOrder} = useContext(CheckoutContext);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setNombre(e.target.value);
  };
  const handleInputChange3 = (e) => {
    setApellido(e.target.value);
  };
  const handleInputChange4 = (e) => {
    setTelefono(e.target.value);
  };
  const handleInputChange5 = (e) => {
    setEmailRepetido(e.target.value);
  };



  const handleOnSubmit = (e) => {
    nombre? setErrorNombre(false): setErrorNombre(true);
    apellido? setErrorApellido(false): setErrorApellido(true) ;
    telefono? setErrorTelefono(false): setErrorTelefono(true) ;
    email? setErrorEmail(false): setErrorEmail(true);
    emailRepetido === email? setErrorEmailRepetido(false): setErrorEmailRepetido(true);
    if(nombre && apellido && telefono && email && emailRepetido === email){
      createOrder();
    } else {
      e.preventDefault();
    }
  };

  
    
  return (
    <div className="containerCheckout">
      <div className="containerForm ">
        <div className="form">
          <header>
            <h2>Datos Personales</h2>
          </header>
          <main>
            
            <form action="post">
              <div className="containerInputs">
                <div className="nombreApellido ">
                  <div className="nombre">
                    <div>
                      <input type="text" name="nombre" id="nombre" placeholder="Nombre" className="inputCheckout" onChange={handleInputChange2} required/>
                      <span className={errorNombre? "errorTrue": "errorFalse"} >Debe ingresar un nombre</span>
                    </div>
                  </div>
                  <div className="apellido">
                    <div>
                      <input type="text" name="apellido" id="apellido" placeholder="Apellido" className="inputCheckout" onChange={handleInputChange3} required/>
                      <span className={errorApellido? "errorTrue": "errorFalse"} >Debe ingresar un apellido</span>
                    </div>
                  </div>
                </div>
                <div className="telefono">
                  <div>
                    <input type="number" name="telefono" id="telefono" placeholder="Teléfono" className="inputCheckout" onChange={handleInputChange4} required/>
                    <span className={errorTelefono? "errorTrue": "errorFalse"}>Debe ingresar un teléfono</span>
                  </div>
                </div>
                <div className="email">
                  <div>
                    <input type="email" name="email" id="email" placeholder="Email" className="inputCheckout" onChange={handleInputChange} required/>
                    <span className={errorEmail? "errorTrue": "errorFalse"} >Debe ingresar un email</span>
                  </div>
                </div>
                <div className="emailRepetido">
                  <div>
                    <input type="email" name="emailRepetido" id="emailRepetido" placeholder="Repetir Email" className="inputCheckout" onChange={handleInputChange5} required/>
                    <span className={errorEmailRepetido? "errorTrue": "errorFalse"}>El email debe coincidir</span>
                  </div>
                </div>
              </div>
              
                  <div className="containerBotonComprar">
                  <Link to={`finish`}>
                  <button className="botonComprar" onClick={handleOnSubmit} disabled>Confirmar Pedido</button>
                  </Link>
                </div>
              
            </form>
          </main>
          <footer>
            <div className="containerFooter">
              <p>©2023 by Valle.</p>
            </div>
          </footer>
        </div>
      </div>
      <aside>
        <div className="containerPedido">
          <div className="pedido">
            {cart.map((item) => (
              <Order key={item.id} item={item} />
            ))}
            <div className="totalDetail">
              <div className="priceDetail">
                  <div className="containerPriceDetail">
                      <p>Subtotal</p>
                      <p>${subtotal}</p>
                  </div>
                  <div className="containerPriceDetail">
                      <p>Envío</p>
                      <p>{envio} </p>
                  </div>
              </div>
              <div className="containerPriceDetail">
                  <p>Total</p>
                  <p>{subtotal + envio} </p>
              </div>
          </div>
          </div> 
        </div>
      </aside>
    </div>
  )
}

export default Checkout