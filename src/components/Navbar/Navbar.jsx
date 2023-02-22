import Carrito from "../Carrito/Carrito"
import logo from "../Navbar/logo.png"


const Navbar = () => {
return (
    <nav className="containerNavbar">
      <img src={logo}  alt="logo empresa" className="logo" />
      <a href="#">Productos</a>
      <a href="#">Nosotros</a>
      <a href="#">FAQ</a>
    </nav>
  )
}

export default Navbar
