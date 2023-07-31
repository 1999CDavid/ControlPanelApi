import { useEffect, useState} from "react";
import OrdersContext from '../Context/OrdersContext'
import React from 'react'

const OrdersProvider = ({ children }) => {
    const [carritos, actualizar] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/carts')
        .then(res=>res.json())
        .then((Listacarrito)=>{  
            actualizar(Listacarrito)
        })
        .catch(error => console.error(error));
    },[]);
    
    return (
    <OrdersContext.Provider value={{carritos}}>
        {children}
    </OrdersContext.Provider>
  )
}

export default OrdersProvider

