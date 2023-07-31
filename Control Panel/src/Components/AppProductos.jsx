import React from 'react'
import ProductosProvider from '../Provider/ProductosProvider'
import TotalProductos from './TotalProductos'


const AppProductos = () => {
  return (
    <div>
      <ProductosProvider>
        <TotalProductos/>
      </ProductosProvider>
    </div>
  )
}

export default AppProductos;