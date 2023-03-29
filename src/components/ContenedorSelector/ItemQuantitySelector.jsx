

const ItemQuantitySelector = () => {
    function sumar() {
        let inputCantidad = document.getElementById('inputCantidad');
        let valor = parseInt(inputCantidad.value);
        valor++;
        inputCantidad.value = valor;
    }

    function restar() {
        let inputCantidad = document.getElementById('inputCantidad');
        let valor = parseInt(inputCantidad.value);
        if (valor > 1) {
            valor--;
            inputCantidad.value = valor; 
        }
    }

    return (
        <div className="containerCantidad">
            <svg id="menos" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinejoin="round" display="block" onClick={restar}><path d="M20 12H4"></path></svg>
            <input id="inputCantidad" className= "input-cantidad text-center" type="number" value={1} readOnly/>
            <svg id="mas" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinejoin="round" display="block" onClick={sumar}><path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"></path></svg>
        </div>
    )
}

export default ItemQuantitySelector