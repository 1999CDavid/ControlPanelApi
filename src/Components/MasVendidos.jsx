import React, { useContext } from 'react';
import OrdersContext from '../Context/OrdersContext';
import ProductosContext from '../Context/ProductosContext';
import { Link } from 'react-router-dom';
import Style from '../Styles/NavBar.module.css'

const MasVendidos = () => {
  const { carritos } = useContext(OrdersContext);
  const { productos } = useContext(ProductosContext);

  const calcularMasVendidos = () => {
    let listaVendidos = [];
    carritos.forEach((carrito) => {
      carrito.products.forEach((productoCarrito) => {
        const datos = {
          id: productoCarrito.productId,
          cantidad: productoCarrito.quantity,
        };
        let encontrado = false;
        listaVendidos.forEach((vendido) => {
          if (vendido.id === datos.id) {
            vendido.cantidad += datos.cantidad;
            encontrado = true;
          }
        });
        if (!encontrado) {
          listaVendidos.push(datos);
        }
      });
    })
    let acumulado = 0
    listaVendidos.map((vendido)=>{
        acumulado += vendido.cantidad 
    });
    
    const MasVendidos = listaVendidos.filter((masVendidos)=>
        masVendidos.cantidad >= acumulado / listaVendidos.length
    )
    let productosMasVendidos = []
    MasVendidos.forEach((masVendido)=>{
        productos.forEach((producto)=>{
            if (producto.id === masVendido.id){
                masVendido =
                    {
                        id : masVendido.id,
                        producto : producto.title,
                        cantidad : masVendido.cantidad,
                    }
                    productosMasVendidos.push(masVendido)
            }  
        })
    })


    return productosMasVendidos;
};

  const masVendidos = calcularMasVendidos();

  return (
    <>
        {productos.length && carritos.length > 0 ? (
            <article className={Style.Card_list}>
                <h2>MasVendidos: </h2>
                {masVendidos.map((vendido) => (
                    <ul key={vendido.id}>
                        <li>{vendido.producto}</li>
                        <li>Cantidad : {vendido.cantidad}</li>
                    </ul>
                ))}
                <Link to="/" className={Style.BackButton} onClick={()=>{Update(!VerCard)}}>
                        Ir atrás
                </Link>
            </article>
            
        ):(
          <article className={Style.Card}>
                    <p>...Cargando</p>
                    <Link to="/" className={Style.BackButton} onClick={()=>{Update(!VerCard)}}>
                        Ir atrás
                    </Link>
                </article>
        )}
        
    </>
    
  );
};

export default MasVendidos;
