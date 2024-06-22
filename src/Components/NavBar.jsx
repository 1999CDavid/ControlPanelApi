import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Outlet, NavLink } from 'react-router-dom';
import Style from '../Styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Container>
      <section className={Style.Barra_sup}>
        <h1>Tienda FakeApi</h1>
        <nav>
          <Nav.Link as={NavLink} to="/productos"> Total de Productos</Nav.Link>
          <Nav.Link as={NavLink} to="/ingresos"> Total de ingresos</Nav.Link>
          <Nav.Link as={NavLink} to="/pedidos"> Total de Pedidos</Nav.Link>
          <Nav.Link as={NavLink} to="/promedios"> Precio de Promedio</Nav.Link>
          <Nav.Link as={NavLink} to="/masvendidos"> Mas vendidos </Nav.Link>
        </nav>
      </section>
    </Container>
  );
}

export default NavBar;

/*
import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Outlet, NavLink } from 'react-router-dom';
import Style from '../Styles/NavBar.module.css';

const NavBar = () => {
  
  return (
    <Container>
      <section className={Style.Barra_sup}>
      <h1>Tienda FakeApi</h1>
        <nav>
          <Nav.Link as={NavLink} to="/productos"> Total de Productos</Nav.Link>
          <Nav.Link as={NavLink} to="/ingresos"> Total de ingresos</Nav.Link>
          <Nav.Link as={NavLink} to="/pedidos"> Total de Pedidos</Nav.Link>
          <Nav.Link as={NavLink} to="/promedios"> Precio de Promedio</Nav.Link>
          <Nav.Link as={NavLink} to="/masvendidos"> Mas vendidos </Nav.Link>
        </nav>       
      </section>      
      <div>
        <Outlet />
      </div>
    </Container>
    
  );
}
export default NavBar;
*/
