const Button = ({greeting}) => {
    const handleClick = () => {
        alert("Hola bienvenido!")
      }
  return (
    <button className="boton" onClick={handleClick}>{greeting} </button>

  )
}

export default Button