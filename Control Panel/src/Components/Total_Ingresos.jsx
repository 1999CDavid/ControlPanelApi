import React, { useContext } from 'react';
import OrdersContext from '../Context/OrdersContext';
import ProductosContext from '../Context/ProductosContext';
import { Link } from 'react-router-dom';
import Style from '../Styles/NavBar.module.css'

const Total_Ingresos = () => {
  const { carritos } = useContext(OrdersContext);
  let { productos,VerCard,Update } = useContext(ProductosContext);

  const calcularIngresosTotales = () => {
    let total = 0;
    carritos.forEach((carrito) => {
      carrito.products.forEach((productoCarrito) => {
        const productoEncontrado = productos.find((producto) => producto.id === productoCarrito.productId);
        if (productoEncontrado) {
          total += productoEncontrado.price * productoCarrito.quantity;
        }
      });
    });
    return total;
  };
  Update(true)
  
  return (
    <>
      {VerCard ? (
        productos && carritos && productos.length > 0 && carritos.length > 0 ? (
          <article className={Style.Card}>
            <h2>Total de Ingresos</h2>
            <p>Ingresos totales:{calcularIngresosTotales().toFixed()}</p>
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
          
        )
      ) : null}
    </>
  );

}

export default Total_Ingresos;

