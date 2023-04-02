import { collection } from 'firebase/firestore'
import React from 'react'
import db from '../../../db/firebase-config'

const PedidoRegistrado = ({pepe}) => {
    // const orderRef = collection(db, 'orders')
    console.log(pepe)

    // const getOrder = async () => {
    //     const orderCollection = await getDocs(orderRef);
    //     setOrder(
    //         orderCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
    //     );
    //     }
  return (
    <div>
        <h1>Pedido Registrado</h1>

    </div>
  )
}

export default PedidoRegistrado