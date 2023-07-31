import React, { useContext } from 'react';
import OrdersContext from '../Context/OrdersContext';
import ProductosContext from '../Context/ProductosContext';
import { Link } from 'react-router-dom';

const Total_Ingresos = () => {
  const { carritos } = useContext(OrdersContext);
  const { productos } = useContext(ProductosContext);

  const calcularIngresosTotales = () => {
    //if (!productos || !carritos) {
      //return 0; // O cualquier valor predeterminado que desees en caso de que no haya datos disponibles
    //}

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

  return (
    <>
      {carritos && productos && carritos.length > 0 ? (
        <p>Ingresos totales: ${calcularIngresosTotales().toFixed()}</p>
      ) : (
        <p>Cargando...</p>
      )}
      <Link to={"/"}>Ir atrás</Link>
    </>
  );
};

export default Total_Ingresos;


