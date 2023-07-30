import React from 'react'
import ProductosProvider from '../Provider/ProductosProvider'
import TotalProductos from './TotalProductos'
import OrdersProvider from '../Provider/OrdersProvider'
import Total_Ingresos from './Total_Ingresos'

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