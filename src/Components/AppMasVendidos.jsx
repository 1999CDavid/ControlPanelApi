import React from 'react'
import ProductosProvider from '../Provider/ProductosProvider'
import OrdersProvider from '../Provider/OrdersProvider';
import MasVendidos from './MasVendidos';
const AppMasVendidos = () => {
  return (
    <ProductosProvider> 
        <OrdersProvider>
            <MasVendidos/>
        </OrdersProvider>
    </ProductosProvider>
  )
}

export default AppMasVendidos