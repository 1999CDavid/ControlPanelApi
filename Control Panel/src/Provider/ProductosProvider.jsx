import { useEffect,useState } from "react";
import ProductosContext from "../Context/ProductosContext";

const ProductosProvider = ({ children }) => {
    const [productos, actualizar] = useState([])
    
    useEffect(() => {
        const obtener = ()=>{
            fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then((data)=>actualizar(data))
            .catch(error => console.error(error));
        };
        obtener();
        },[productos] );

    const contar = () =>{
        return(
            console.log(productos.length)
        )
    }

    return(
        <ProductosContext.Provider value={{contar}}>
            {children}
        </ProductosContext.Provider>
    )

}
        
export default ProductosProvider;


