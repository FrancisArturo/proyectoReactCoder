
import OffCanvasBoton from "../OffCanvas/OffCanvasBoton";




  function AddItemButton({producto}) {
    
    return (
      <>
        {['end'].map((placement, idx) => (
          <OffCanvasBoton key={idx} placement={placement} name={placement} producto={producto} />
        ))}
      </>
    );
  }


export default AddItemButton