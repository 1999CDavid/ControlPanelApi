import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <article>
        <h1>Panel de Control</h1>
        <nav>
            <Link to ="/productos"> Total de Productos</Link>
        </nav>
    </article>
  );
}

export default NavBar;