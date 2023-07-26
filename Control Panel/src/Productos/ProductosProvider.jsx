import { useEffect,useState } from "react";
import ProductosContext from "./ProductosContext";

const ProductosProvider = ({ children }) => {
    const [productos, actualizar] = useState([])
    useEffect(
        () => {
            fetch('https://fakestoreapi.com/products/1')
                .then(res=>res.json())
                .then((data)=>actualizar(data));
        },[]
    )
    
    const contar = () =>{
        return productos.length
    }

    return(
        <ProductosContext.Provider value={{contar}}>
            {children}
        </ProductosContext.Provider>
    )

}
        
export default ProductosProvider;