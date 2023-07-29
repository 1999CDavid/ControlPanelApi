import { useEffect, useState} from "react";
import ProductosContext from "../Context/ProductosContext";

const ProductosProvider = ({ children }) => {
    const [productos, actualizar] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then((Listaproductos)=>{  
            actualizar(Listaproductos)
        })
        .catch(error => console.error(error));
    },[]);
    
    return(
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
    );
};      

export default ProductosProvider;


