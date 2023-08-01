import React from 'react'
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router-dom';
import ProductosProvider from './Provider/ProductosProvider';

const Layout = () => {

  return (
      <>
        <ProductosProvider>
          <NavBar/>
          <Outlet/>
        </ProductosProvider>
        
      
        
      </>
  
  );
}

export default Layout;
