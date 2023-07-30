import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <article>
        <h1>
           Tienda FakeApi
        </h1>
        <nav>
            <Link to ="/productos"> Total de Productos</Link>
            <Link to ="/ingresos"> Total de ingresos</Link>
        </nav>
    </article>
  );
}

export default NavBar;