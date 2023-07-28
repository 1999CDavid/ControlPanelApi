import React from 'react'
import ProductosProvider from '../Provider/ProductosProvider'
import Mostrar from './Mostrar'

const AppProductos = () => {
  return (
    <ProductosProvider>
      <Mostrar/>
    </ProductosProvider>
  )
}

export default AppProductos