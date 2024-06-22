import React, { useContext } from 'react'
import OrdersContext from '../Context/OrdersContext';
import ProductosContext from '../Context/ProductosContext';
import { Link } from 'react-router-dom';
import Style from '../Styles/NavBar.module.css'


const Total_Pedidos = () => {
    const { carritos } = useContext(OrdersContext);
    const { VerCard,Update } = useContext(ProductosContext);
    const CalcularPedidos = () =>{
        const totalPedidos = carritos.reduce((actual,carrito)=>{
                return actual + carrito.products.length;
            },0);
        return totalPedidos;
    }

    return (
        <>
            {carritos && carritos.length > 0 ? 
            (<article className={Style.Card}>
                <h2> Total de Pedidos </h2>
                <p>Total de Pedidos : {CalcularPedidos()}</p>
                <Link to="/" className={Style.BackButton} onClick={()=>{Update(!VerCard)}}>
                    Ir atrás
                </Link>
            </article>) 
            :
            (   <article className={Style.Card}>
                    <p>...Cargando</p>
                    <Link to="/" className={Style.BackButton} onClick={()=>{Update(!VerCard)}}>
                        Ir atrás
                    </Link>
                </article>)}
        </>
        
    )
}

export default Total_Pedidos