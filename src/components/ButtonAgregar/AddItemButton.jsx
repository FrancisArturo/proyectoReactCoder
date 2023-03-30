
import AddItemButton1 from "../OffCanvas/OffCanvasBoton";



  function AddItemButton({producto}) {
    
    return (
      <>
        {['end'].map((placement, idx) => (
          <AddItemButton1 key={idx} placement={placement} name={placement} producto={producto} />
        ))}
      </>
    );
  }


export default AddItemButton