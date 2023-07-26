import React, { useContext } from 'react'
import ProductosContext from './ProductosContext'

const Mostrar = () => {
    const {contar} = useContext(ProductosContext);
    const total = (e)=>{
        e.preventDefault();
        contar();
    }


  return (
    <>
        <button onClick={total}>Total de Productos</button>

    </>
  )
}

export default Mostrar