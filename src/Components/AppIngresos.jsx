import React from 'react';
import ProductosProvider from '../Provider/ProductosProvider';
import OrdersProvider from '../Provider/OrdersProvider';
import Total_Ingresos from './Total_Ingresos';

const AppIngresos = () => {
  return (
    <div>
      <ProductosProvider>
        <OrdersProvider>
          <Total_Ingresos />
        </OrdersProvider>
      </ProductosProvider>
    </div>
  );
};

export default AppIngresos;
