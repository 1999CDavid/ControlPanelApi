import React, { useContext } from 'react'
//import OrdersContext from '../Context/OrdersContext';
import ProductosContext from '../Context/ProductosContext'
import { Link } from 'react-router-dom'

const Total_Ingresos = () => {
  //const {carrito} = useContext(OrdersContext);
  const {productos} = useContext(ProductosContext);
  
  let precios = []
  let calcular = ()=>{

  if (!productos) {
    console.error("Productos are not defined!");
    return;
  }

    productos.forEach((producto) => {
      precios.push(producto.price)
    });
    console.log(precios) 
  }
  calcular(); 
  return (
    <>
      {precios.length <= 0 ? (
        <p>Cargando...</p>
      ) : (
        <p>{precios}</p>
      )}
      <Link to={"/"}>Ir atras</Link>
    </>

  )
}

export default Total_Ingresos