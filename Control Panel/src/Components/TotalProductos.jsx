import React, { useContext } from 'react'
import ProductosContext from '../Context/ProductosContext'
import { Link } from 'react-router-dom'

const TotalProductos = () => {
    const {productos} = useContext(ProductosContext);
    let cantidad = productos.length
  return (
    <>
      {productos.length > 0 ? (
        <p>Cantidad total: {cantidad}</p>
      ) : (
        <p>Cargando...</p>
      )}
      <Link to={"/"}>Ir atras</Link>
    </>
  )
}

export default TotalProductos