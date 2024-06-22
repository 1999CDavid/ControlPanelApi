import React from 'react'
import ProductosProvider from '../Provider/ProductosProvider';
import PrecioPromedio from './PrecioPromedio';

const AppPromedios = () => {
  return (
    <>
        <ProductosProvider>
            <PrecioPromedio/>
        </ProductosProvider>
    
    </>
    
  )
}

export default AppPromedios