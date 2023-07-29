import React from 'react'
import ProductosProvider from '../Provider/ProductosProvider'
import TotalProductos from './TotalProductos'

const AppProductos = () => {
  return (
    <ProductosProvider>
      <TotalProductos/>
    </ProductosProvider>
  )
}

export default AppProductos;