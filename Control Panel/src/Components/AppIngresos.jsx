import React from 'react'
import ProductosProvider from '../Provider/ProductosProvider'
import Total_Ingresos from './Total_Ingresos'

const AppIngresos = () => {
  return (
    <>
        <ProductosProvider>
          <Total_Ingresos/>
        </ProductosProvider>
    </>
    
  )
}

export default AppIngresos;