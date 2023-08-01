import React, { useContext } from 'react';
import OrdersContext from '../Context/OrdersContext';
import ProductosContext from '../Context/ProductosContext';

const MasVendidos = () => {
    const { carritos } = useContext(OrdersContext);
    const { productos,VerCard,Update } = useContext(ProductosContext);

    const calcularMasVendidos = () =>{
        let TodosLosId = []
        carritos.forEach((carrito) => {
            carrito.products.forEach((productoCarrito)=>{
                const arrayId = Object.keys(productoCarrito);
                arrayId.forEach((id)=>{
                    let into=TodosLosId.includes(id)
                    into ? (null):(TodosLosId.push(id))
                })
            })
           
        })
    };
  return (
    <div>MasVendidos</div>
  )
}

export default MasVendidos