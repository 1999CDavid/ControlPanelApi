import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Style from '../Styles/NavBar.module.css'
import ProductosContext from '../Context/ProductosContext'


const NavBar = () => {
  const {VerCard,Update} = useContext(ProductosContext);
  return (
    <article className={Style.Barra_sup}>
        <h1>Tienda FakeApi</h1>
        <nav>
            <Link to ="/productos" onClick={()=>{Update(!VerCard)}}> Total de Productos</Link>
            <Link to ="/ingresos" onClick={()=>{Update(!VerCard)}}> Total de ingresos</Link>
            <Link to ="/pedidos" > Total de Pedidos</Link>
        </nav>       
    </article>
  );
}
export default NavBar;

