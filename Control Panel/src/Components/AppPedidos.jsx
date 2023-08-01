import React from 'react'
import OrdersProvider from '../Provider/OrdersProvider'
import Total_Pedidos from './Total_Pedidos'
const AppPedidos = () => {
  return (
    <OrdersProvider>
        <Total_Pedidos/>
    </OrdersProvider>
  )
}

export default AppPedidos