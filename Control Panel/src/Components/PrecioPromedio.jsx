import React, { useContext } from 'react';
import ProductosContext from '../Context/ProductosContext';
import { Link } from 'react-router-dom';
import Style from '../Styles/NavBar.module.css'

const PrecioPromedio = () => {
    const { productos,VerCard,Update } = useContext(ProductosContext);
    const calcularPromedio = () =>{
        let total=0;
        productos.forEach((producto)=>{
            total += producto.price
        })
        return (total/productos.length)
    }

  return (
    <>
    {productos && productos.length > 0 ? (
      <article className={Style.Card}>
        <h2> Precio Promedio </h2>
        <p>Precio promedio: $ {calcularPromedio().toFixed()} dólares</p>
        <Link to="/" className={Style.BackButton} onClick={()=>{Update(!VerCard)}}>
                    Ir atrás
        </Link>
      </article>
    ):(<article className={Style.Card}>
        <p>...Cargando</p>
        <Link to="/" className={Style.BackButton} onClick={()=>{Update(!VerCard)}}>
            Ir atrás
        </Link>
      </article>)}
    
    </>
  )
}

export default PrecioPromedio