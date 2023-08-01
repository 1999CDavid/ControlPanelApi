import React, { useContext } from 'react'
import ProductosContext from '../Context/ProductosContext'
import { Link } from 'react-router-dom'
import Style from '../Styles/NavBar.module.css'


const TotalProductos = () => {
    const {productos,VerCard,Update} = useContext(ProductosContext);
    let cantidad = productos.length

  return (
    <>
      {productos.length > 0 ? (
        <article className={Style.Card}>
          <h2>Total de Productos</h2>
          <p>Cantidad total: {cantidad}</p>
          <Link to="/" className={Style.BackButton} onClick={()=>{Update(!VerCard)}}>
              Ir atrás
            </Link>
        </article>
      ) : (
        <article className={Style.Card}>
          <p>Cargando...</p>
          <Link to="/" className={Style.BackButton} onClick={()=>{Update(!VerCard)}}>
                Ir atrás
          </Link>
        </article>
      )}
    </>
  )
}
export default TotalProductos