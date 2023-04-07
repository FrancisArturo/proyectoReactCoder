import { useParams } from "react-router-dom";
import Card from "../Card/Card"
import { collection, getDocs } from "firebase/firestore";
import db from "../../../db/firebase-config";
import { useEffect, useState } from "react";


const ItemListContainer = ({productos}) => {
  const categoriesCollectionRef = collection(db, 'categories')
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const categoriesCollection = await getDocs(categoriesCollectionRef);
    setCategories(
      categoriesCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
    );
  }
  useEffect(() => {
    getCategories();
  }, []);


  const {id} = useParams();
  if (id && id != "all") {
    const category = categories.find((category) => category.description == id);
    productos = productos.filter((producto) => producto.category == category.id);
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
